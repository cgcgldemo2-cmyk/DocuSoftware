import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DocuSoftware',
  description: 'Documentation for DocuSoftware',
  themeConfig: {
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'API', link: '/api' },
      { text: 'Guides', link: '/guide/' },
    ],
  },
})