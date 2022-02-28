<template>
<div>

  <div class="row">
   <div class="col-md-8">
     <div class="card mb-3">
       <div class="row g-0">
         <div class="col-md-4" v-if="info.image">
           <img :src="info.image.medium" class="img-fluid rounded-start show-img" :alt="info.name">
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <h5 class="card-title">{{info.name}}</h5>
             <p class="card-text show-desc" v-html="sanitize(info.summary)" :title="info.summary"></p>
             <p class="card-text"><small class="text-muted">Last updated on {{moment.unix(info.updated).format('DD MMM YYYY')}}</small></p>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="col-md-4">
     <div class="card">
       <div class="card-header">Show Info</div>
       <div class="card-body">
       <ul class="list-group list-group-flush">
         <li class="list-group-item">
           <span class="info-label">Network: </span> <span class="info-value">{{info.network&&info.network.name}}</span>
         </li>
         <li class="list-group-item" v-if="info.schedule">
           <span class="info-label">Schedule: </span> <span class="info-value">{{info.schedule.days[0]}} at
           {{info.schedule.time}} ({{info.runtime}} min)</span>
         </li>
         <li class="list-group-item">
           <span class="info-label">Status: </span> <span class="info-value">{{info.status}}</span>
         </li>
         <li class="list-group-item">
           <span class="info-label">Genres: </span> <span class="info-value" v-if="info.genres">{{info.genres.join(' | ')}}</span>
         </li>
         <li class="list-group-item">
           <span class="info-label">Official Site: </span>
           <a class="info-value" :href="info.officialSite" target="_blank">{{info.officialSite}}</a>
         </li>
         <li class="list-group-item">
           <span class="info-label">Type: </span> <span class="info-value">{{info.type}}</span>
         </li>
       </ul>
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
  name: 'ShowInfo',
  props: {
    info: {
      type: Object
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
.show-desc{
  color: #125f04;
  font-size: 0.90em;
  text-decoration: none;
}
.info-label{
  font-weight: 600;
}
.info-value{
  font-size: 0.90em;
}
@media screen and (max-width: 768px){
  .show-img{
    width: 100%;
  }
}
@media screen and (min-width: 768px){
  .show-desc{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
}
</style>
