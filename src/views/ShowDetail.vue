<template>
<div id="show-detail">

  <Navigation :items="navItems"/>

  <h4>{{show.name}}</h4>

  <template v-if="errorResponse.status === 404">Data not found.</template>
  <template v-else>
  <ul class="nav nav-pills mb-3" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#main"
              type="button" role="tab">Main</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#seasons"
              type="button" role="tab">Seasons</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#cast"
              type="button" role="tab">Cast</button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="main" role="tabpanel">
      <ShowInfo :info="show"/>
    </div>
    <div class="tab-pane fade" id="seasons" role="tabpanel">
      <ShowSeasons :seasons="show._embedded.seasons"/>
    </div>
    <div class="tab-pane fade" id="cast" role="tabpanel">
      <ShowCast :cast="show._embedded.cast"/>
    </div>
  </div>
  </template>

  <ProgressLinear v-if="loading"/>
</div>
</template>

<script>
import axios from 'axios'
import Constants from '@/constants/Constants'
import ProgressLinear from '@/components/utility/ProgressLinear'
import ShowInfo from '@/components/ShowDetail/ShowInfo'
import ShowSeasons from '@/components/ShowDetail/ShowSeasons'
import ShowCast from '@/components/ShowDetail/ShowCast'
import Navigation from '@/components/utility/Navigation'

export default {
  name: 'ShowDetail',
  components: { Navigation, ShowCast, ShowSeasons, ShowInfo, ProgressLinear },
  data () {
    return {
      show: { _embedded: { seasons: [], cast: [] } },
      loading: false,
      errorResponse: {}
    }
  },
  computed: {
    navItems: function () {
      return [{ text: 'Home', redirectTo: '/dashboard' }, { text: this.show.name }]
    }
  },
  methods: {
    getTVShowDetail () {
      this.loading = true
      axios.get(`${Constants.api_url}shows/${this.$route.params.id}?embed[]=seasons&embed[]=cast`).then(response => {
        this.show = response.data
        this.loading = false
      }).catch(error => {
        this.errorResponse = error.response
        this.loading = false
        console.log(error)
      })
    }
  },
  created () {
    this.getTVShowDetail()
  }
}
</script>
