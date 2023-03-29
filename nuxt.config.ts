// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/custom.scss', '@fortawesome/fontawesome-free/css/all.css'],
  runtimeConfig: {
    public: { ...process.env },
  },
  ssr: false,
  modules: ['@pinia/nuxt'],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
})
