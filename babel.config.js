module.exports = (api) => {
	api.cache(false)

	return {
		ignore: ["**/testDirsAndFiles/**", "**/spruce-templates/src/templates/**"],
		presets: ['@babel/preset-env', '@babel/preset-typescript'],
		plugins: [
			['module-resolver',
			{
				root: ['./'],
				alias: {
					'#spruce': './src/.spruce',
				},
			}],
		]
	}
}
