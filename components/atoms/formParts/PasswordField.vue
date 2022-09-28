<template>
  <v-text-field
    :value="value"
    label="パスワード"
    :type="show ? 'text' : 'password'"
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="show = !show"
    @input="$emit('update:value', $event)"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component({})
export default class PasswordField extends Vue {
  show = false
  @Prop({ type: String, required: true }) value!: string
}
</script>

<style scoped>

</style>
