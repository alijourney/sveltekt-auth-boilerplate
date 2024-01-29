export default {
	$schema: 'https://json.schemastore.org/prettierrc',
	plugins: ['prettier-plugin-svelte'],
	useTabs: true,
	semi: false,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	pluginSearchDirs: ['.'],
	overrides: [{
		files: '*.svelte',
		options: { parser: 'svelte' }
	}]
}
