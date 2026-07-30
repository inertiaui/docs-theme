import { nextTick, onMounted, watch } from 'vue'

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
