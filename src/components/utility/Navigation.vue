<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="mt-2 mb-4">
    <ol class="breadcrumb">
      <template v-for="(item, index) in items">
        <li class="breadcrumb-item" :class="index+1===items.length?'active':''" :key="'item-'+index">
          <a v-if="item.redirectTo" href="" @click="redirect(item.redirectTo)">{{item.text}}</a>
          <span v-else>{{item.text}}</span>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    redirect (path) {
      this.$router.push(path)
    }
  }
}
</script>
