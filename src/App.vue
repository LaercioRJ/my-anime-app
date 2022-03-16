<template>
  <div id="app">
    <TopBarVue />
    <router-view/>
  </div>
</template>

<script>
  import TopBarVue from "./components/TopBar.vue";

  export default {
    components: {
      TopBarVue
    }
  }
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css'
</style>
