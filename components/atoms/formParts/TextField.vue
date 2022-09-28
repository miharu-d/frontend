<template>
  <v-text-field
    :label="label"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('update:value', $event)"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component({})
export default class TextField extends Vue {
  @Prop({ type: String, required: true }) value!: string
  @Prop({ type: String, required: true }) label!: string
  @Prop({ type: String, required: true }) placeholder!: string
}
</script>

<style scoped>

</style>
