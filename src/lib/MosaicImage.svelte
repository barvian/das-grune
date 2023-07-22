<script lang="ts">
	import Img from '$lib/Image.svelte'
	import { observe } from '$lib/actions'
	import type { ComponentProps } from 'svelte'
	import { fly } from 'svelte/transition'
	import { expoOut } from 'svelte/easing'

	type $$Props = Omit<ComponentProps<Img>, 'src'> & {
		wrapperClass?: string
		src: Required<ComponentProps<Img>['src']>
	}

	export let src: Required<ComponentProps<Img>['src']>

	export let wrapperClass = ''
	let cls: string | null | undefined = ''
	export { cls as class }

	let ref: HTMLImageElement
	export let loaded = false
	let entered = false

	let sources: typeof src, lqip: any
	if (src?.length) {
		const b64 = src.find((i) => i.base64)
		lqip = b64
		sources = src.filter((i) => !i.base64)
	}
</script>

<div class="relative {wrapperClass}" use:observe on:enter|once={() => (entered = true)}>
	<Img
		{...$$restProps}
		{src}
		class="relative bg-[length:100%_100%] {cls} {!loaded ? 'js:rendering-pixelated' : ''}"
		bind:loaded
		bind:ref
		on:click
	/>
	{#if !entered || !loaded}
		<div
			class="hidden js:grid absolute top-0 left-0 w-full h-full"
			style:grid-template-rows="repeat({Math.floor(lqip.height)}, minmax(0, 1fr))"
			style:grid-template-columns="repeat({Math.floor(lqip.width)}, minmax(0, 1fr))"
		>
			{#each lqip.pixels as p, i}
				{@const opt = [{ x: '-100%' }, { x: '100%' }, { y: '-100%' }, { y: '100%' }][
					Math.floor(Math.random() * 4)
				]}
				<div class="overflow-hidden">
					<div
						out:fly|global={{ ...opt, duration: 700, delay: i * 1.5, opacity: 1, easing: expoOut }}
						class="w-full h-full"
						style:background-color="rgb({p[0]},{p[1]},{p[2]})"
					/>
				</div>
			{/each}
		</div>
	{/if}
</div>
