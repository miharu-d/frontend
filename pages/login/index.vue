<template>
  <div>
    {{qiitaArticles}}
    <login-organism />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import LoginOrganism from "~/components/organisms/logins/LoginOrganism.vue";

@Component({
  components: {
    LoginOrganism
  },
  layout: 'noMenu',
  name: 'LoginPage',
  auth: false
})
export default class LoginPage extends Vue {
  qiitaArticles: string = ''

  async mounted () {
    let page = this;
      await this.$axios.$get('/api/test').then(function(result: string) {
        page.qiitaArticles = result;
      })
  }
}
</script>

<style scoped>

</style>
