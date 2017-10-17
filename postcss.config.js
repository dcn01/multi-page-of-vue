module.exports = {
  plugins: [
    require('postcss-salad'),
    require('postcss-pxtorem')({
      rootValue: 20,
      propList: ['*']
    }),
  ]
}
