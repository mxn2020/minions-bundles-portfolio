import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const isProd = process.env.BRANCH === 'main';
const isDev = process.env.BRANCH === 'dev';
const siteUrl = isProd ? 'https://docs.minions.wtf' : (isDev ? 'https://docs.minions.wtf' : 'http://localhost:4321');

export default defineConfig({
    site: siteUrl,
    integrations: [
        starlight({
            customCss: ['./src/styles/custom.css'],
            title: 'Minions Bundle: Portfolio',
            description: 'Top-level structural organizational bundle — categories, ecosystems, projects',
            defaultLocale: 'root',
            locales: {
                root: { label: 'English', lang: 'en' },
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/mxn2020/minions-bundles-portfolio' },
                { icon: 'external', label: 'App', href: 'https://app.minions.wtf' },
            ],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'Introduction', link: '/getting-started/introduction/' },
                        { label: 'Installation', link: '/getting-started/installation/' },
                        { label: 'Quick Start', link: '/getting-started/quick-start/' },
                    ],
                },
                {
                    label: 'API Reference',
                    items: [
                        { label: 'TypeScript', link: '/api/typescript/' },
                        { label: 'Python', link: '/api/python/' },
                    ],
                },
            ],
        }),
    ],
});
