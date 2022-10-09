<template>
  <div>
    {{ this.$auth.loggedIn }}
    {{ this.$auth.user }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class IndexPage extends Vue {
}
</script>
