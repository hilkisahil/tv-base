<template>
<div id="dashboard">

    <div v-for="(genre, index) in genres" :key="genre">
      <TvShowList :shows="tvShows[genre]" :genre="genre"/>
      <hr class="my-lg-4" v-if="index+1 !== genres.length">
    </div>

  <ProgressLinear v-if="loading"/>
</div>
</template>

<script>
import axios from 'axios'
import Constants from '@/constants/Constants'
import TvShowList from '@/components/TvShowList'
import ProgressLinear from '@/components/utility/ProgressLinear'
const genres = ['Action', 'Thriller', 'Science-Fiction', 'Horror']
export default {
  name: 'Dashboard',
  components: { ProgressLinear, TvShowList },
  data: function () {
    return {
      genres,
      tvShows: genres.reduce((ac, genre) => { ac[genre] = []; return ac }, {}), // { Action:[], Thriller:[], ... }
      loading: false
    }
  },
  methods: {
    getTVShows () {
      this.loading = true
      axios.get(`${Constants.api_url}shows`).then(response => {
        const tvShows = this.genres.reduce((ac, genre) => { ac[genre] = []; return ac }, {})
        /* ------ Group data by genre ------- */
        response.data.forEach(show => {
          show.genres.forEach(genre => {
            if (this.genres.includes(genre)) tvShows[genre].push(show)
          })
        })
        /* ---- Sort each list of TV Shows ---- */
        this.genres.forEach(genre => {
          tvShows[genre].sort((a, b) => b.rating.average - a.rating.average)
        })
        this.tvShows = tvShows
        this.loading = false
      }).catch(error => {
        this.loading = false
        console.log(error)
      })
    }
  },
  created () {
    this.getTVShows()
  }
}
</script>
