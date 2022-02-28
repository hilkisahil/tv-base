<template>
<div>

  <table class="table table-bordered table-hover" aria-label="List of Seasons with their name & description">
    <thead>
    <tr>
      <th>#</th>
      <th colspan="2">Season</th>
      <th>Start & End Year</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="season in seasons" :key="season.id">
      <td>{{season.number}}</td>
      <td><img :src="season.image.medium" class="season-img rounded" v-if="season.image" :alt="season.name"></td>
      <td>{{season.name || '-'}}</td>
      <td style="width: 144px">{{moment(season.premiereDate).format('YYYY')}} - {{moment(season.endDate).format('YYYY')}}</td>
      <td v-html="sanitize(season.summary)"></td>
    </tr>
    <tr v-if="!seasons.length">
      <td colspan="5" class="text-center">No Season detail available.</td>
    </tr>
    </tbody>
  </table>

  <div class="card mb-3 hand-pointer d-md-none" v-for="season in seasons" :key="season.id">
    <div class="row g-0">
      <div class="col-md-2">
        <img :src="season.image.medium" v-if="season.image" class="img-fluid rounded-start season-img" :alt="season.name">
        <div class="show-img border-end" v-else></div>
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <h5 class="card-title">Season {{season.number}}
            <span class="text-muted fs-16">
              ({{moment(season.premiereDate).format('YYYY')}} - {{moment(season.endDate||moment()).format('YYYY')}})
            </span>
          </h5>
          <p class="card-text show-desc" v-html="sanitize(season.summary)"></p>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import moment from 'moment'
import DOMPurify from 'dompurify'
export default {
  name: 'ShowSeasons',
  props: {
    seasons: {
      type: Array
    }
  },
  data () {
    return {
      moment,
      sanitize: (html) => DOMPurify.sanitize(html)
    }
  }
}
</script>

<style scoped>
.season-desc{
  font-size: 0.90em;
}
@media screen and (max-width: 768px){
  .table{
    display: none;
  }
  .season-img{
    width: 100%;
  }
}
@media screen and (min-width: 768px){
  .season-img{
    width: 120px;
    height: 168px;
  }
}
</style>
