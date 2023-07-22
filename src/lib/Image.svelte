<script lang="ts">
	// Expose a loaded prop to bind to from SvelteImg
	import SvelteImg from '@zerodevx/svelte-img'
	import { onMount, type ComponentProps } from 'svelte'
	import type { HTMLImgAttributes } from 'svelte/elements'

	type $$Props = Omit<HTMLImgAttributes, 'src'> &
		ComponentProps<SvelteImg> & {
			loaded?: boolean
		}

	let ref: HTMLImageElement
	export let loaded = false
	onMount(() => {
		if (ref.complete) loaded = true
	})
</script>

<SvelteImg {...$$restProps} bind:ref on:load={() => (loaded = true)} />
