<template>

<!-- <div @click="redirectToShowDetail(show.id)" class="card-container">
  <img :src="show.image.medium" class="img-fluid" :alt="show.name" loading="lazy" :title="show.name">
  <div class="ps-2 mt-2">{{show.name}}</div>
  <div class="ps-2">{{moment(show.premiered).format('YYYY')}} · {{show.network&&show.network.name}} ·
    <img src="../assets/icons/star-fill.svg" class="star-icon" alt="star"> {{show.rating.average}}
  </div>
</div> -->

    <div class="hover-effect" @click="redirectToShowDetail(show.id)">
      <img :src="show.image.medium" class="card-image" :alt="show.name" loading="lazy" :title="show.name">
      <div class="overlay">
        <h3>{{ show.name }}</h3>
        <div class="info">
          {{moment(show.premiered).format('YYYY')}} · {{show.network&&show.network.name}} ·
          <img src="../assets/icons/star-fill.svg" class="star-icon" alt="star"> {{show.rating.average}}
        </div>
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

<style>
.card-image{
  width: 100%;
}
</style>
<style scoped>
/* .card-container{
  cursor: pointer;
}
.show-img{
  width: 100%;
  height: 300px;
  object-fit: cover;
} */
.star-icon{
  width: 14px;
  height: 14px;
  /*margin-bottom: 4px;*/
}
.hover-effect {
  width:100%;
  height:100%;
  float:left;
  overflow:hidden;
  position:relative;
  text-align:center;
  cursor:pointer;
}

@media screen and (min-width: 640px) {
  .hover-effect {
    border-radius: 12px;
  }
  .hover-effect .overlay {
    width:100%;
    height:100%;
    position:absolute;
    overflow:hidden;
    top:0;
    left:0;
    opacity:0;
    background-color:rgba(0,0,0,0.5);
    -webkit-transition:all .4s ease-in-out;
    transition:all .4s ease-in-out
  }

  .hover-effect .card-image {
    display:block;
    position:relative;
    -webkit-transition:all .4s linear;
    transition:all .4s linear;
  }

  .hover-effect h3 {
    color:#fff;
    text-align:center;
    position:relative;
    font-size:17px;
    background:rgba(0,0,0,0.6);
    -webkit-transform:translatey(-100px);
    -ms-transform:translatey(-100px);
    transform:translatey(-100px);
    -webkit-transition:all .2s ease-in-out;
    transition:all .2s ease-in-out;
    padding:10px;
  }

  .hover-effect div.info {
    text-decoration:none;
    text-transform:uppercase;
    color:#fff;
    border:1px solid #fff;
    background:rgba(0,0,0,0.6);
    opacity:0;
    filter:alpha(opacity=0);
    -webkit-transition:all .2s ease-in-out;
    transition:all .2s ease-in-out;
    position: absolute;
    bottom: 0;
    padding: 10px;
    width: 100%;
  }

  .hover-effect div.info:hover {
    box-shadow:0 0 5px #fff;
  }

  .hover-effect:hover .card-image {
    -ms-transform:scale(1.2);
    -webkit-transform:scale(1.2);
    transform:scale(1.2);
  }

  .hover-effect:hover .overlay {
    opacity:1;
    filter:alpha(opacity=100);
  }

  .hover-effect:hover h3,.hover-effect:hover div.info {
    opacity:1;
    filter:alpha(opacity=100);
    -ms-transform:translatey(0);
    -webkit-transform:translatey(0);
    transform:translatey(0);
  }

  .hover-effect:hover div.info {
    -webkit-transition-delay:.2s;
    transition-delay:.2s;
  }
}

@media screen and (max-width: 640px) {
  .hover-effect div.info {
    display: none;
  }
  .hover-effect h3 {
    font-size: 16px;
    margin: 10px 0 0 0;
  }
  .hover-effect .card-image {
    border-radius: 12px;
  }
}
</style>
