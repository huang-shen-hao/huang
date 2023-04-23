<template>
  <div id="app">
    <router-view></router-view>
    <!-- <HomeFooter></HomeFooter> -->
  </div>
</template>

<script>

// import HomeFooter from './components/home/HomeFooter.vue'
export default {
  name: 'App',
  components: {
    // HomeFooter,
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
