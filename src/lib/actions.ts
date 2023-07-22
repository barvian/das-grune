import type { Action } from 'svelte/action'

// Based off SvelteImg's observe: adds enter and leave events to element, and
// entering/entered classes (used for animations)
const observers: Record<number, IntersectionObserver> = {}
export const observe = ((node, threshold = 0.25) => {
	// Use one IntersectionObserver per threshold, per:
	// https://www.bennadel.com/blog/3954-intersectionobserver-api-performance-many-vs-shared-in-angular-11-0-5.htm
	let observer = observers[threshold]
	if (!observer) {
		observer = observers[threshold] = new IntersectionObserver(
			(entries) => {
				for (const detail of entries) {
					detail.target.dispatchEvent(
						new CustomEvent(detail.isIntersecting ? 'enter' : 'leave', { detail })
					)
				}
			},
			{ threshold }
		)
	}

	observer.observe(node)

	node.addEventListener(
		'enter',
		() => {
			node.setAttribute('data-observe-entered', '')
			node.setAttribute('data-observe-entering', '')
			node.addEventListener(
				'transitionend',
				() => {
					node.removeAttribute('data-observe-entering')
				},
				{ once: true }
			)
		},
		{ once: true }
	)

	return {
		destroy() {
			observer.unobserve(node)
		}
	}
}) satisfies Action<HTMLElement, number>
