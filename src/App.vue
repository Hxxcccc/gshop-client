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

    async mounted () {
     const result = await reqAddress('116.36867', '40.10038')
      console.log(result)
    },

    components: {
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>