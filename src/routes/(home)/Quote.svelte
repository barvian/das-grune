<script lang="ts">
	import { onMount } from "svelte"

    let el: HTMLElement
    onMount(async () => {
        const { default: Splitting } = await import('splitting')
        Splitting({
            target: el
        })
    })
</script>

<blockquote bind:this={el} class="bg-[#292929] text-[#c4c4c4] uppercase text-7xl p-[10vw] font-medium tracking-[0.01em]">
    <slot />
</blockquote>
