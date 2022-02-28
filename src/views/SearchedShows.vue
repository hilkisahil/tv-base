<template>
<div>

  <Navigation :items="navItems"/>

  <h4>Search Results {{searchQuery}}</h4>

  <div class="card mb-3 hand-pointer" v-for="show in shows" :key="show.id" @click="redirectToShowDetail(show.id)">
    <div class="row g-0">
      <div class="col-md-2">
        <img :src="show.image.medium" v-if="show.image" class="img-fluid rounded-start show-img" :alt="show.name">
        <div class="show-img border-end" v-else></div>
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <h5 class="card-title">{{show.name}}
            <span class="text-muted fs-16" v-if="show.network">({{show.network.name}},
              {{moment(show.premiered).format('YYYY')}} - {{moment(show.ended||moment()).format('YYYY')}})
            </span>
          </h5>
          <p class="card-text show-desc" v-html="sanitize(show.summary)" :title="show.summary"></p>
          <p class="mb-1 fs-15">Schedule:
            {{show.schedule.days[0]}} at {{show.schedule.time}} ({{show.runtime}} min)
          </p>
          <p class="fs-15" v-if="show.officialSite">Official Site:
            <a :href="show.officialSite" target="_blank" @click.stop>{{show.officialSite}}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!shows.length">No result found.</div>

  <ProgressLinear v-if="loading"/>
</div>
</template>

<script>
import axios from 'axios'
import Constants from '@/constants/Constants'
import ProgressLinear from '@/components/utility/ProgressLinear'
import moment from 'moment'
import Navigation from '@/components/utility/Navigation'
import DOMPurify from 'dompurify'
export default {
  name: 'SearchedShows',
  components: { Navigation, ProgressLinear },
  data () {
    return {
      shows: [],
      loading: false,
      moment,
      sanitize: (html) => DOMPurify.sanitize(html)
    }
  },
  computed: {
    searchQuery () {
      return this.$store.state.search
    },
    navItems: function () {
      return [{ text: 'Home', redirectTo: '/dashboard' }, { text: 'Search' }]
    }
  },
  watch: {
    searchQuery: function (val) {
      if (val) this.searchTVShows(val)
    },
    '$route.query': function (val) {
      if (val.q) this.$store.commit('setSearch', val.q)
    }
  },
  methods: {
    redirectToShowDetail (showId) {
      this.$router.push(`/shows/${showId}`)
    },
    searchTVShows (query) {
      this.loading = true
      axios.get(`${Constants.api_url}search/shows?q=${query}`).then(response => {
        this.shows = response.data.map(d => d.show)
        this.loading = false
      }).catch(error => {
        this.loading = false
        console.log(error)
      })
    }
  },
  created () {
    this.$store.commit('setSearch', this.$route.query.q)
  },
  beforeDestroy () {
    this.$store.commit('setSearch', '')
  }
}
</script>

<style scoped>
.fs-16{
  font-size: 16px;
}
.fs-15{
  font-size: 15px;
}
.show-desc{
  color: #125f04;
  font-size: 0.90em;
  text-decoration: none;
}
@media screen and (max-width: 768px){
  .show-img{
    width: 100%;
  }
}
@media screen and (min-width: 768px){
  .show-img{
    width: 134px;
    height: 188px;
  }
  .show-desc{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
}
</style>
