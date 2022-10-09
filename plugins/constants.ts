const SITE_NAME: string = 'JPA Tools'

const SITE_MENU: Array<object> = [
  {
    icon: 'mdi-chart-bubble',
    title: 'ログアウト',
    to: '/logout'
  }
]

export default (context: any, inject: any) => {
  inject('SITE_NAME', SITE_NAME)
  inject('SITE_MENU', SITE_MENU)
}
