<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'

  import {reqAddress} from './api'

  export default {

   mounted () {
     this.$store.dispatch('getAddress')
     this.$store.dispatch('getUserInfo')
    },

    components: {
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>