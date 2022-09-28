<template>
  <v-btn
    :color="color"
    outlined
    type="submit"
    class="ma-auto"
    @click="$emit('submit')"
  >
    {{ btnLabel }}
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "nuxt-property-decorator"

@Component({})
export default class SubmitButton extends Vue {
  @Inject() color: string
  @Inject() btnLabel: string
}
</script>

<style scoped>

</style>
