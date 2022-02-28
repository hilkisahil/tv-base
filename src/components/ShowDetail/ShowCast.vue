<template>
<div>

  <table class="table table-bordered table-hover" aria-label="List of Cast with their name & country">
    <thead>
    <tr>
      <th>#</th>
      <th colspan="2">Cast</th>
      <th>Country</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(cst, index) in cast" :key="cst.id">
      <td style="width: 10px">{{index+1}}</td>
      <td style="width: 120px">
        <img :src="cst.character.image.medium" class="cast-img rounded" v-if="cst.character.image" :alt="cst.person.name">
      </td>
      <td>{{cst.person.name}} <br> as {{cst.character.name}}</td>
      <td>{{cst.person.country&&cst.person.country.name}}</td>
    </tr>
    <tr v-if="!cast.length">
      <td colspan="4" class="text-center">No Cast detail available.</td>
    </tr>
    </tbody>
  </table>

  <div class="card mb-3 hand-pointer d-md-none" v-for="cst in cast" :key="cst.id">
    <div class="row g-0">
      <div class="col-md-2">
        <img :src="cst.character.image.medium" v-if="cst.character.image" class="img-fluid rounded-start cast-img" :alt="cst.person.name">
        <div class="show-img border-end" v-else></div>
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <h5 class="card-title">{{cst.person.name}} <br> as {{cst.character.name}}
            <span class="text-muted fs-16">({{ cst.person.country && cst.person.country.name }})</span>
          </h5>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'ShowCast',
  props: {
    cast: {
      type: Array
    }
  }
}
</script>

<style scoped>

@media screen and (max-width: 768px){
  .table{
    display: none;
  }
  .cast-img{
    width: 100%;
  }
}
@media screen and (min-width: 768px){
  .cast-img{
    width: 85px;
    height: 120px;
  }
}
</style>
