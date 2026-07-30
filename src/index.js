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

export function extractInertiaUiDescription(markdown, fallback, { maxLength = 158 } = {}) {
    let raw = markdown.replace(/^---[\s\S]*?---\s*/, '')
    const lines = raw.split('\n')
    let paragraph = ''
    let inFence = false
    let inVueBlock = false

    for (const line of lines) {
        const trimmed = line.trim()

        if (trimmed.startsWith('```')) {
            inFence = !inFence
            continue
        }

        if (trimmed.startsWith('<script')) {
            inVueBlock = true
            continue
        }

        if (inVueBlock) {
            if (trimmed.startsWith('</script>')) {
                inVueBlock = false
            }
            continue
        }

        if (inFence) continue
        if (!trimmed) continue
        if (trimmed.startsWith('#')) continue
        if (trimmed.startsWith('::')) continue
        if (trimmed.startsWith('|')) continue
        if (trimmed.startsWith('- ')) continue
        if (trimmed.startsWith('* ')) continue
        if (trimmed.startsWith('<')) continue

        paragraph = trimmed
        break
    }

    if (!paragraph) {
        return fallback
    }

    paragraph = paragraph
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/_([^_]+)_/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim()

    if (paragraph.length > maxLength) {
        paragraph = `${paragraph.slice(0, maxLength - 3).trimEnd()}...`
    }

    return paragraph
}

export function inertiaUiSlugFor(relativePath) {
    return relativePath
        .replace(/\/index\.md$/, '')
        .replace(/index\.md$/, '')
        .replace(/\.md$/, '')
}

export function inertiaUiUrlFor(siteUrl, slug) {
    return slug ? `${siteUrl}/${slug}` : siteUrl
}

export function inertiaUiFullTitle(pageTitle, siteTitleSuffix, { separator = ' - ' } = {}) {
    const title = pageTitle.trim()

    if (!title || title === siteTitleSuffix) {
        return siteTitleSuffix
    }

    return `${title}${separator}${siteTitleSuffix}`
}

function resolveSeoValue(value, context) {
    return typeof value === 'function' ? value(context) : value
}

function withJsonLdDefaults(entity, defaults) {
    return {
        '@context': 'https://schema.org',
        ...defaults,
        ...entity,
    }
}

export function createInertiaUiSeoTransform({
    siteName,
    siteTitleSuffix,
    siteUrl,
    siteBaseUrl,
    siteDescription,
    ogImage,
    authorName = 'Pascal Baljet',
    authorUrl = 'https://pascalbaljet.dev',
    organization = 'Inertia UI',
    organizationUrl = 'https://inertiaui.com',
    articleDependencies,
    descriptionForPage,
    sectionFor,
    softwareApplication,
    installationHowTo,
    homeSlug = '',
    installationSlug = 'installation',
    titleSeparator = ' - ',
} = {}) {
    const requiredOptions = { siteName, siteTitleSuffix, siteUrl, siteBaseUrl, siteDescription, ogImage }
    const missingOption = Object.entries(requiredOptions).find(([, value]) => !value)?.[0]

    if (missingOption) {
        throw new Error(`createInertiaUiSeoTransform expects ${missingOption}.`)
    }

    return function transformPageData(pageData) {
        const slug = inertiaUiSlugFor(pageData.relativePath)
        const canonicalUrl = inertiaUiUrlFor(siteUrl, slug)
        const isHome = slug === homeSlug
        const isInstallation = slug === installationSlug
        const pageTitle = pageData.frontmatter.title || pageData.title || (isHome ? siteTitleSuffix : 'Documentation')
        const pageDescription = pageData.frontmatter.description || descriptionForPage?.(pageData.relativePath, siteDescription) || siteDescription
        const renderedTitle = inertiaUiFullTitle(pageTitle, siteTitleSuffix, { separator: titleSeparator })

        pageData.description = pageDescription

        pageData.frontmatter.head ??= []
        const head = pageData.frontmatter.head

        head.push(['link', { rel: 'canonical', href: canonicalUrl }])
        head.push(['meta', { name: 'description', content: pageDescription }])
        head.push(['meta', { property: 'og:title', content: renderedTitle }])
        head.push(['meta', { property: 'og:description', content: pageDescription }])
        head.push(['meta', { property: 'og:url', content: canonicalUrl }])
        head.push(['meta', { property: 'og:type', content: isHome ? 'website' : 'article' }])

        const ids = {
            person: `${authorUrl}/#pascal`,
            organization: `${organizationUrl}/#organization`,
            software: `${siteBaseUrl}/#software`,
            website: `${siteUrl}/#website`,
        }

        const context = {
            slug,
            canonicalUrl,
            isHome,
            isInstallation,
            pageTitle,
            pageDescription,
            renderedTitle,
            ids,
        }

        const section = sectionFor?.(slug)

        if (!isHome) {
            head.push(['meta', { property: 'article:author', content: authorName }])
            head.push(['meta', { property: 'article:section', content: section?.name ?? 'Documentation' }])
        }

        head.push(['meta', { name: 'twitter:title', content: renderedTitle }])
        head.push(['meta', { name: 'twitter:description', content: pageDescription }])
        head.push(['meta', { name: 'twitter:url', content: canonicalUrl }])

        const personEntity = {
            '@type': 'Person',
            '@id': ids.person,
            name: authorName,
            url: authorUrl,
            worksFor: { '@id': ids.organization },
            sameAs: [
                'https://twitter.com/pascalbaljet',
                'https://x.com/pascalbaljet',
                'https://github.com/pascalbaljet',
                'https://bsky.app/profile/pascalbaljet.bsky.social',
                'https://youtube.com/pascalbaljet',
                authorUrl,
            ],
        }

        const organizationEntity = {
            '@type': 'Organization',
            '@id': ids.organization,
            name: organization,
            url: organizationUrl,
            logo: {
                '@type': 'ImageObject',
                url: 'https://inertiaui.com/favicon-96x96.png',
            },
            founder: { '@id': ids.person },
            sameAs: ['https://github.com/inertiaui', 'https://twitter.com/pascalbaljet'],
        }

        if (!isHome) {
            const techArticle = {
                '@type': 'TechArticle',
                headline: pageTitle,
                name: pageTitle,
                description: pageDescription,
                url: canonicalUrl,
                inLanguage: 'en-US',
                author: { '@id': ids.person },
                publisher: { '@id': ids.organization },
                about: { '@id': ids.software },
                isPartOf: { '@id': ids.website },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': canonicalUrl,
                },
                proficiencyLevel: 'Intermediate',
                dependencies: articleDependencies,
                image: ogImage,
            }
            head.push(['script', { type: 'application/ld+json' }, JSON.stringify(withJsonLdDefaults(techArticle))])
        }

        if (isHome) {
            const website = {
                '@type': 'WebSite',
                '@id': ids.website,
                name: siteName,
                url: `${siteUrl}/`,
                description: siteDescription,
                inLanguage: 'en-US',
                publisher: { '@id': ids.organization },
                about: { '@id': ids.software },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                        '@type': 'EntryPoint',
                        urlTemplate: `${siteUrl}/?q={search_term_string}`,
                    },
                    'query-input': 'required name=search_term_string',
                },
            }
            head.push(['script', { type: 'application/ld+json' }, JSON.stringify(withJsonLdDefaults(website))])
            head.push(['script', { type: 'application/ld+json' }, JSON.stringify(withJsonLdDefaults(organizationEntity))])
            head.push(['script', { type: 'application/ld+json' }, JSON.stringify(withJsonLdDefaults(personEntity))])

            const software = resolveSeoValue(softwareApplication, context)

            if (software) {
                head.push([
                    'script',
                    { type: 'application/ld+json' },
                    JSON.stringify(
                        withJsonLdDefaults(software, {
                            '@type': 'SoftwareApplication',
                            '@id': ids.software,
                        }),
                    ),
                ])
            }
        }

        if (isInstallation) {
            const howTo = resolveSeoValue(installationHowTo, context)

            if (howTo) {
                head.push([
                    'script',
                    { type: 'application/ld+json' },
                    JSON.stringify(
                        withJsonLdDefaults(howTo, {
                            '@type': 'HowTo',
                        }),
                    ),
                ])
            }
        }

        if (!isHome) {
            const breadcrumb = {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Documentation',
                        item: `${siteUrl}/introduction`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: section?.name ?? 'Documentation',
                        item: section?.url ?? `${siteUrl}/introduction`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: pageTitle,
                        item: canonicalUrl,
                    },
                ],
            }
            head.push(['script', { type: 'application/ld+json' }, JSON.stringify(withJsonLdDefaults(breadcrumb))])
        }
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
