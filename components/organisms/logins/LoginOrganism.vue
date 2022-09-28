<template>
  <form @submit.prevent="submit">
    <v-card class="py-5 px-10">
      {{form}}
      <v-card-text>
        <login-molecule :form.sync="form" />
      </v-card-text>
      <v-card-actions>
        <submit-button />
      </v-card-actions>
    </v-card>
  </form>
</template>

<script lang="ts">
import {Component, Provide, Vue} from "nuxt-property-decorator"
import LoginMolecule from "~/components/molecules/logins/LoginMolecule.vue";
import SubmitButton from "~/components/atoms/buttons/SubmitButton.vue";

@Component({
  components: {SubmitButton, LoginMolecule }
})
export default class LoginOrganism extends Vue {
  form = {
    email: 'a',
    password: 'b'
  }

  @Provide() color = 'indigo'
  @Provide() btnLabel = 'ログイン'

  async submit () {
    alert()
  }
}
</script>

<style scoped>

</style>
