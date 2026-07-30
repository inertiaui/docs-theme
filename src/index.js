import { nextTick, onMounted, watch } from 'vue'

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
