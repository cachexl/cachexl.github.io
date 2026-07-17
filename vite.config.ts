import { defineConfig, loadEnv } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteSitemap } from 'svelte-sitemap/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        server: {
			base: '/',
            host: '0.0.0.0',
			port: 5173,
            allowedHosts: [
                'localhost',
                env.VITE_DEV_HOST
            ]
        },

        plugins: [
            sveltekit(),
            svelteSitemap({
                domain: 'https://cachexl.github.io'
            })
        ]
    };
});