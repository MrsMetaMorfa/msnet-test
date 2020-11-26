module.exports = {
	filenameHashing: false,
	pluginOptions: {
		svgSprite: {
			dir: 'src/assets/svg',
			test: /\.svg$/,
			loaderOptions: {
				extract: false,
				spriteFilename: 'assets/svg/sprite.svg'
			}
		},
		i18n: {
			locale: 'ru',
			fallbackLocale: 'en',
			localeDir: 'locales',
			enableInSFC: true
		}
	}
}
