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
import { createInertiaUiTheme } from '@inertiaui/docs-theme'
import '@inertiaui/docs-theme/base.css'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default createInertiaUiTheme(DefaultTheme, {
    codeGroupStorageKey: 'inertiauiProductCodeGroupTab',
    useRoute,
})
```

Product docs keep their own nav, sidebar, VitePress config, and local components.

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
