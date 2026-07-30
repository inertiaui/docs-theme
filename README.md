# Inertia UI Docs Theme

Shared VitePress theme primitives for Inertia UI documentation sites.

Install it from the GitHub main branch:

```json
{
    "dependencies": {
        "@inertiaui/docs-theme": "git+https://github.com/inertiaui/docs-theme.git#main"
    }
}
```

## Usage

```js
import { createInertiaUiDocsConfig, createInertiaUiTheme, inertiaUiHead } from '@inertiaui/docs-theme'
import '@inertiaui/docs-theme/base.css'
import { defineConfig, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const sharedConfig = createInertiaUiDocsConfig({ productSlug: 'inertia-product' })

export default defineConfig({
    ...sharedConfig,
    title: 'Inertia Product Documentation',
    head: inertiaUiHead([
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ]),
    themeConfig: {
        ...sharedConfig.themeConfig,
        siteTitle: 'Product Documentation',
        nav: [],
        sidebar: [],
    },
})
```

Product theme entry:

```js
import { createInertiaUiTheme } from '@inertiaui/docs-theme'
import '@inertiaui/docs-theme/base.css'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default createInertiaUiTheme(DefaultTheme, {
    codeGroupStorageKey: 'inertiauiProductCodeGroupTab',
    useRoute,
})
```

Product docs keep their own title, description, nav, sidebar, SEO metadata, Vite
plugins, redirects, and local components.

SEO primitives are shared, but product data stays local:

```js
import { createInertiaUiSeoTransform, extractInertiaUiDescription } from '@inertiaui/docs-theme'

const transformPageData = createInertiaUiSeoTransform({
    siteName: 'Inertia Product Documentation',
    siteTitleSuffix: 'Inertia Product',
    siteUrl: 'https://inertiaui.com/inertia-product/docs',
    siteBaseUrl: 'https://inertiaui.com/inertia-product',
    siteDescription: 'Product docs description.',
    ogImage: 'https://inertiaui.com/og/product.png',
    articleDependencies: 'Laravel, Inertia.js, Vue or React',
    descriptionForPage(relativePath, fallback) {
        return extractInertiaUiDescription(readMarkdown(relativePath), fallback)
    },
    sectionFor(slug) {
        return { name: 'Documentation', url: 'https://inertiaui.com/inertia-product/docs/introduction' }
    },
})
```

## Build Redirects

```json
{
    "scripts": {
        "docs:build": "inertiaui-vitepress-build --redirects .vitepress/redirects"
    }
}
```

The redirects file uses Cloudflare `_redirects` syntax, one rule per line. GitHub
or Cloudflare deployment should publish the generated `dist` directory.
