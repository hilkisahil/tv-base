<template>
<div>

  <h4>{{genre}}</h4>
  <div class="row flex-nowrap overflow-auto mt-3">
    <div class="col-md-2 col-6" v-for="show in shows" :key="show.id">
      <TvShowCard :show="show"/>
    </div>
  </div>

</div>
</template>

<script>
import TvShowCard from '@/components/TvShowCard'
export default {
  name: 'ShowList',
  components: { TvShowCard },
  props: {
    shows: {
      type: Array
    },
    genre: {
      type: String
    }
  }
}
</script>
