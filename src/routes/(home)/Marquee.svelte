<script lang="ts">
	import { observe } from "$lib/actions"
    import { spring } from 'svelte/motion'

    let x = spring(0, { stiffness: 0.1, damping: 0.5 })
    let wrapper: HTMLElement
    function handleScroll() {
		if (!wrapper) return
		$x = window.innerHeight - wrapper.getBoundingClientRect().top
	}
	handleScroll()
</script>

<svelte:window on:scroll={handleScroll} on:resize={handleScroll} />
<a bind:this={wrapper} href="/#discuss" class="bg-[#101010] block group relative before:bg-[#292929] before:opacity-0 before:inset-0 before:absolute hover:before:opacity-100 before:transition overflow-hidden">
	<div class="bg-discuss bg-repeat-x w-[calc(100%+100vh+10rem)] bg-[5%_center] bg-[length:auto_2.75rem] h-[10rem] will-change-transform" style:transform="translateX(-{$x}px)" />
	<span class="sr-only">Discuss your ideas</span>
</a>