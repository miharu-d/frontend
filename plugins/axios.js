export default function ({ $axios, store, redirect }) {
  $axios.onResponse((res) => {
    // store.dispatch('validation/clearErrors')

    return Promise.resolve(res)
  })

  $axios.onError((err) => {
    console.log(err.response)

    if (err.response) {
      const error = {
        status: err.response.status,
        data: {
          errors: err.response.data.errors,
          errorMsg: err.response.data.message
        }
      }

      if (err.response.status === 422) {
        // store.dispatch('validation/setErrors', err.response.data.errors)
      } else if (err.response.status === 400 || err.response.status === 401) {
        // store.dispatch('modules/user/initialize')
        // store.dispatch('modules/admin/initialize')
        // store.dispatch('modules/employee/initialize')
        // store.dispatch('changeLoginStatus', false)

        redirect('/')
      } else {
        // store.dispatch('validation/setErrors', {
        //   error: err.response.data.errorMsg
        // })
      }

      return Promise.reject(error)
    } else {
      console.log('Error', err.message)

      const error = {
        status: 500,
        data: {
          errors: err,
          errorMsg: err.message
        }
      }

      return Promise.reject(error)
    }
  })
}
