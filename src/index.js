import { nextTick, onMounted, watch } from 'vue'

export const inertiaUiFontHead = [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
        'link',
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Albert+Sans:wght@100..900&family=Geist+Mono:wght@100..900&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Schibsted+Grotesk:wght@400..900&display=swap',
        },
    ],
]

export function inertiaUiHead(entries = []) {
    const productionHead =
        process.env.NODE_ENV === 'production'
            ? [
                  [
                      'script',
                      {
                          async: '',
                          src: 'https://analytics.ahrefs.com/analytics.js',
                          'data-key': 'A06g5iU8TH9IWlCPkl0/OQ',
                      },
                  ],
              ]
            : []

    return [...productionHead, ...entries, ...inertiaUiFontHead]
}

export const inertiaUiMarkdownTheme = {
    light: {
        name: 'inertia-ui-light',
        type: 'light',
        colors: {
            'editor.background': '#f6f7fb',
            'editor.foreground': '#111827',
        },
        tokenColors: [
            { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#9ca3af', fontStyle: 'italic' } },
            { scope: ['keyword', 'storage', 'storage.type', 'keyword.control', 'keyword.operator.new'], settings: { foreground: '#7e57c2', fontStyle: '' } },
            { scope: ['string', 'string.quoted', 'punctuation.definition.string'], settings: { foreground: '#15803d' } },
            { scope: ['constant.numeric', 'constant.language', 'constant.character'], settings: { foreground: '#c2410c' } },
            { scope: ['variable', 'variable.other', 'variable.parameter', 'variable.language'], settings: { foreground: '#334155' } },
            {
                scope: ['support.function', 'entity.name.function', 'meta.function-call', 'meta.function-call entity.name.function'],
                settings: { foreground: '#2563eb' },
            },
            { scope: ['entity.name.class', 'entity.name.type', 'support.class', 'entity.other.inherited-class'], settings: { foreground: '#5b21b6' } },
            { scope: ['entity.name.tag', 'meta.tag'], settings: { foreground: '#2563eb' } },
            { scope: ['entity.other.attribute-name'], settings: { foreground: '#7e57c2' } },
            { scope: ['punctuation', 'meta.brace', 'punctuation.section'], settings: { foreground: '#64748b' } },
            { scope: ['variable.other.property', 'support.type.property-name'], settings: { foreground: '#334155' } },
            { scope: ['support.type', 'support.constant'], settings: { foreground: '#7e57c2' } },
        ],
    },
    dark: {
        name: 'inertia-ui-dark',
        type: 'dark',
        colors: {
            'editor.background': '#1f1a2e',
            'editor.foreground': '#e8e3ec',
        },
        tokenColors: [
            { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#676e95', fontStyle: 'italic' } },
            { scope: ['keyword', 'storage', 'storage.type', 'keyword.control', 'keyword.operator.new'], settings: { foreground: '#c792ea', fontStyle: '' } },
            { scope: ['string', 'string.quoted', 'punctuation.definition.string'], settings: { foreground: '#c3e88d' } },
            { scope: ['constant.numeric', 'constant.language', 'constant.character'], settings: { foreground: '#f78c6c' } },
            { scope: ['variable', 'variable.other', 'variable.parameter', 'variable.language'], settings: { foreground: '#a6accd' } },
            {
                scope: ['support.function', 'entity.name.function', 'meta.function-call', 'meta.function-call entity.name.function'],
                settings: { foreground: '#82aaff' },
            },
            { scope: ['entity.name.class', 'entity.name.type', 'support.class', 'entity.other.inherited-class'], settings: { foreground: '#ffcb6b' } },
            { scope: ['entity.name.tag', 'meta.tag'], settings: { foreground: '#89ddff' } },
            { scope: ['entity.other.attribute-name'], settings: { foreground: '#c792ea' } },
            { scope: ['punctuation', 'meta.brace', 'punctuation.section'], settings: { foreground: '#89ddff' } },
            { scope: ['variable.other.property', 'support.type.property-name'], settings: { foreground: '#a6accd' } },
            { scope: ['support.type', 'support.constant'], settings: { foreground: '#c792ea' } },
        ],
    },
}

export function inertiaUiSocialLinks({ githubLink = 'https://github.com/inertiaui' } = {}) {
    return [
        { icon: 'github', link: githubLink },
        { icon: 'twitter', link: 'https://twitter.com/pascalbaljet' },
        {
            icon: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"/></svg>',
            },
            link: 'https://bsky.app/profile/pascalbaljet.bsky.social',
        },
        { icon: 'youtube', link: 'https://youtube.com/pascalbaljet' },
    ]
}

export function createInertiaUiDocsConfig({ productSlug, githubLink } = {}) {
    if (!productSlug) {
        throw new Error('createInertiaUiDocsConfig expects a productSlug.')
    }

    const production = process.env.NODE_ENV === 'production'

    return {
        lang: 'en-US',
        base: production ? `/${productSlug}/docs/` : null,
        outDir: production ? `./dist/${productSlug}/docs` : './dist',
        cleanUrls: production,
        markdown: {
            theme: inertiaUiMarkdownTheme,
        },
        themeConfig: {
            logo: {
                light: '/inertiaui-logo.svg',
                dark: '/inertiaui-logo-white.svg',
                alt: 'Inertia UI',
            },
            logoLink: production ? `/${productSlug}/docs/introduction` : '/introduction',
            search: { provider: 'local' },
            aside: false,
            socialLinks: inertiaUiSocialLinks({ githubLink }),
        },
    }
}

export function setupCodeGroupTabs(storageKey, route) {
    if (typeof window === 'undefined' || !storageKey || !route) {
        return
    }

    const boundLabels = new WeakSet()
    let preventScroll = false

    function scrollToY(y) {
        window.scrollTo({
            top: y,
            behavior: 'instant',
        })
    }

    function showCodeWithLabel(labelText) {
        document.querySelectorAll('.vp-code-group .tabs label').forEach((label) => {
            if (label.innerText !== labelText) {
                return
            }

            const input = document.getElementById(label.getAttribute('for'))

            if (input && !input.checked) {
                label.click()
            }
        })
    }

    function bindClickEvents() {
        document.querySelectorAll('.vp-code-group .tabs label').forEach((label) => {
            if (boundLabels.has(label)) {
                return
            }

            boundLabels.add(label)

            label.addEventListener('click', (event) => {
                const labelFor = label.getAttribute('for')
                const initialRect = label.getBoundingClientRect()
                const initialScrollY = window.scrollY

                localStorage.setItem(storageKey, label.innerText)
                showCodeWithLabel(label.innerText)

                nextTick(() => {
                    if (preventScroll || !event.isTrusted || !labelFor) {
                        return
                    }

                    const selectedLabel = document.querySelector(`label[for="${labelFor}"]`)

                    if (!selectedLabel) {
                        return
                    }

                    const newRect = selectedLabel.getBoundingClientRect()
                    const yDiff = newRect.top + window.scrollY - (initialRect.top + initialScrollY)

                    scrollToY(initialScrollY + yDiff)
                })
            })
        })
    }

    function selectTabAndScrollToTop(tab) {
        if (!tab) {
            return
        }

        preventScroll = true
        showCodeWithLabel(tab)

        nextTick(() => {
            preventScroll = false
            scrollToY(0)
        })
    }

    onMounted(() => {
        nextTick(() => {
            bindClickEvents()
            selectTabAndScrollToTop(localStorage.getItem(storageKey))
        })
    })

    watch(
        () => route.path,
        () => {
            nextTick(() => {
                bindClickEvents()
                selectTabAndScrollToTop(localStorage.getItem(storageKey))
            })
        },
    )
}

export function createInertiaUiTheme(baseTheme, { codeGroupStorageKey, enhanceApp, Layout, setup, useRoute } = {}) {
    return {
        extends: baseTheme,

        ...(Layout ? { Layout } : {}),

        enhanceApp(context) {
            enhanceApp?.(context)
        },

        setup() {
            setupCodeGroupTabs(codeGroupStorageKey, useRoute?.())
            setup?.()
        },
    }
}
