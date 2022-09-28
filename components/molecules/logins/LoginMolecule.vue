<template>
  <div>
    <span>aaa</span>
    <text-field
      type="text"
      label="メールアドレス"
      :value.sync="form.email"
      placeholder=""
    />
    <password-field
      :value.sync="form.password"
      @input="$emit('update:password', $event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import PasswordField from "~/components/atoms/formParts/PasswordField.vue";
import TextField from "~/components/atoms/formParts/TextField.vue";

interface FormData {
  email: String,
  password: String
}

@Component({
  components: {TextField, PasswordField}
})
export default class LoginMolecule extends Vue {
  @Prop({ type: Object, required: true }) form!: FormData;
}
</script>

<style scoped>

</style>
