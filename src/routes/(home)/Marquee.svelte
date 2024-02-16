<script lang="ts">
	import { spring } from 'svelte/motion'

	let x = spring(0, { stiffness: 0.1, damping: 0.5 })
	let wrapper: HTMLElement
	function handleScroll() {
		if (!wrapper) return
		$x = window.innerHeight - wrapper.getBoundingClientRect().top
	}
	$: wrapper && handleScroll()
</script>

<svelte:window on:scroll={handleScroll} on:resize={handleScroll} />
<a
	bind:this={wrapper}
	href="/#discuss"
	class="bg-gray-900 block group relative before:bg-gray-800 py-[1em] ~text-2.5xl/6xl before:opacity-0 before:inset-0 before:absolute hover:before:opacity-100 before:transition overflow-hidden"
>
	<div
		class="bg-discuss bg-repeat-x w-[calc(100%+100vh+3em)] bg-[5%_center] bg-[length:auto_1em] h-[1em] will-change-transform"
		style:transform="translateX(-{$x}px)"
	/>
	<span class="sr-only">Discuss your ideas</span>
</a>
