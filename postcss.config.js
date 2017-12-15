module.exports = {
  plugins: [
  	require('stylelint')({
	  config: require('./stylelint.config.js'),
	}),
	require('postcss-partial-import')(),
	require('precss')(),
	require('postcss-css-reset')(),
	require('postcss-short')(),
	require('postcss-pxtorem')({
		rootValue: 20,
		propList: ['*']
	}),
	require('autoprefixer')({
       browsers: ['last 2 versions', 'iOS 7', '> 5%', "ie 8"]
	}),
	require("postcss-reporter")({ clearReportedMessages: true, throwError: false })
  ]
}
