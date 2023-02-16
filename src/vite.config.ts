import { defineConfig } from 'vite';
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	base: './',
	resolve: {
		alias: {
			$bootstrap: resolve(__dirname, 'node_modules/bootstrap')
		}
	}
});
