import { Context, Plugin } from '@nuxt/types';

export default ({ $axios, isDev }: Context) => {
  // リクエストログ
  $axios.onRequest((config) => {
    console.log('onRequest:', config)
  })

  // レスポンスログ
  $axios.onResponse((config) => {
    console.log('onResponse:', config)
  })

  $axios.onRequestError((e) => {
    console.log('onRequestError:', e)
  })

  // エラーログ
  $axios.onError((e) => {
    console.log('onError:', e)
    return Promise.resolve(e.response)
  })
}
