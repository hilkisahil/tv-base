<template>
<div @click="redirectToShowDetail(show.id)" class="card-container">
  <img :src="show.image.medium" class="img-fluid show-img" :alt="show.name" loading="lazy" :title="show.name">
  <div class="ps-2 mt-2">{{show.name}}</div>
  <div class="ps-2">{{moment(show.premiered).format('YYYY')}} · {{show.network&&show.network.name}} ·
    <img src="../assets/icons/star-fill.svg" class="star-icon" alt="star"> {{show.rating.average}}
  </div>
</div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ShowCard',
  props: {
    show: { type: Object }
  },
  data: function () {
    return {
      moment
    }
  },
  methods: {
    redirectToShowDetail (showId) {
      this.$router.push(`/shows/${showId}`)
    }
  }
}
</script>

<style scoped>
.card-container{
  cursor: pointer;
}
.show-img{
  width: 150px;
  height: 210px;
}
.star-icon{
  width: 14px;
  height: 14px;
  margin-bottom: 4px;
}
</style>
