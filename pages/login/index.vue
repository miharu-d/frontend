<template>
  <div>
    {{qiitaArticles}}
  </div>
</template>

<script>
export default {
  name: "index",

  data () {
    return {
      qiitaArticles: []
    }
  },

  async mounted () {
    let page = this;
    await this.$axios.$get('/api/test').then(function(result) {
      page.qiitaArticles = result;
    })
  }
}
</script>

<style scoped>

</style>
