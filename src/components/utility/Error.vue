<template>
  <div class="text-center">
    <div class="status-code">404</div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <router-link to="/dashboard">Home page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: function () {
        return { statusCode: 404 }
      }
    }
  }
}
</script>

<style scoped>
.status-code{
  font-size: 75px;
}
</style>
