// @ts-check
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig(
	{
		ignores: ['dist/', '.astro/', 'node_modules/'],
	},
	eslint.configs.recommended,
	tseslint.configs.recommended,
	eslintPluginAstro.configs['flat/recommended'],
	prettierConfig,
	{
		files: ['**/*.astro'],
		rules: {
			'astro/no-set-html-directive': 'error',
		},
	},
	{
		rules: {
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': ['warn'],
		},
	},
);
