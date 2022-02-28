<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand hand-pointer" @click="redirectToDashboard">
          <img src="./assets/icons/tv-screen.png" class="tv-logo" alt="tv-logo">TV Base
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item hand-pointer" @click="redirectToDashboard">
              <a class="nav-link" aria-current="page">Home</a>
            </li>
          </ul>
          <span class="navbar-text">
            <form class="d-flex" @submit.prevent="redirectToSearch">
              <input class="form-control me-2" type="search" placeholder="Search TV Shows"
                     aria-label="Search" v-model="computedSearch">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </span>
        </div>
      </div>
    </nav>

    <router-view class="routed-view"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    computedSearch: {
      get () { return this.$store.state.search },
      set (val) { this.search = val }
    }
  },
  methods: {
    redirectToDashboard () {
      if (this.$route.path !== '/dashboard') this.$router.push('/dashboard')
    },
    redirectToSearch () {
      const search = this.search.trim()
      if (search) {
        this.$router.push(`/search?q=${search}`).then(() => this.$store.commit('setSearch', search)).catch(
          () => this.$store.commit('setSearch', search))
        this.search = ''
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.tv-logo{
  height: 24px;
  margin-bottom: 6px;
  margin-right: 10px;
}
.hand-pointer{
 cursor: pointer;
}
.routed-view{
  margin-top: 50px;
  padding: 30px;
}
</style>
