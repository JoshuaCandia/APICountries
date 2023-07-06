module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'eslint-config-prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: { 'react/prop-types': 0 },
}
