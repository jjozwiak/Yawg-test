export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {},
  app: {
    head: {
      title: 'Jasonjozwiak.com'
    }
  },
  nitro: {
    preset: 'static'
  }
})
