<template>
<div style="position:relative;">

  <h4 class="ms-3" style="color: #000000">{{genre}}</h4>
 <!-- <div class="row flex-nowrap overflow-auto mt-3">
    <div class="col-md-2 col-6" v-for="show in shows" :key="show.id">
      <TvShowCard :show="show"/>
    </div>
  </div> -->

  <div class="swiper-button-prev" slot="button-prev" @click="slideLeft" v-show="buttonPrev"></div>
  <swiper class="swiper wrapper" :options="swiperOptions" :ref="'swiper-'+genre" @slideChange="onSlideChange">
    <swiper-slide v-for="show in shows" :key="show.id">
      <TvShowCard :show="show"/>
    </swiper-slide>
  </swiper>
  <div class="swiper-button-next" slot="button-next" @click="slideRight" v-show="buttonNext&&shows.length"></div>

</div>
</template>

<script>
import TvShowCard from '@/components/TvShowCard'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'ShowList',
  components: { TvShowCard, Swiper, SwiperSlide },
  props: {
    shows: { type: Array },
    genre: { type: String }
  },
  data () {
    return {
      buttonPrev: false,
      buttonNext: true,
      swiperOptions: {
        freeMode: true,
        // navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
          1024: { slidesPerView: 5, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 10 },
          320: { slidesPerView: 2, spaceBetween: 10 }
        }
      }
    }
  },
  methods: {
    onSlideChange () {
      const swiper = this.$refs['swiper-' + this.genre].$swiper
      this.buttonPrev = !swiper.isBeginning
      this.buttonNext = !swiper.isEnd
    },
    slideLeft () {
      const swiper = this.$refs['swiper-' + this.genre].$swiper
      swiper.slideTo(swiper.activeIndex - 1)
    },
    slideRight () {
      const swiper = this.$refs['swiper-' + this.genre].$swiper
      swiper.slideTo(swiper.activeIndex + 1)
    }
  }
}
</script>

<style>
@import '../../node_modules/swiper/css/swiper.css';
.wrapper {
  display: flex;
  width: 90%;
  justify-content: space-around;
}
:root{
  --swiper-navigation-size: 30px;
}
@media screen and (max-width: 992px) {
  .swiper-button-prev {
    left: -16px;
  }
  .swiper-button-next {
    right: -16px;
  }
}
</style>
