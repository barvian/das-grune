<script lang="ts">
    import Img from '@zerodevx/svelte-img'
    import { onMount } from 'svelte'
	import { observe } from '@zerodevx/svelte-img/utils'
    
    // Not aware of types for this (https://github.com/zerodevx/svelte-img/blob/master/src/lib/FxReveal.svelte)
    export let src: any[] = []

    let cls = ''
    export { cls as class }
    
    let ref: HTMLImageElement
    let mounted = false
    let loaded = false
    let inview = false
    
    let sources: typeof src, lqip: string
    $: if (src.length) {
      const { base64 } = src.find((i) => i.base64) || {}
      lqip = base64
      sources = src.filter((i) => !i.base64)
    }

    $: if (sources && mounted && loaded && inview) {
        console.log('kick off')
    }
    
    onMount(() => {
      mounted = true
      if (ref.complete) loaded = true
    })
</script>

{#if src.length}
    <div
        class="relative overflow-hidden"
        use:observe
        on:enter={() => inview = true}
    >
        <img class="absolute top-0 left-0 w-full h-full object-cover rendering-pixelated" src={lqip} alt="" />
        <Img class="relative {cls}" src={sources} bind:ref on:load={() => loaded = true} on:click {...$$restProps} />
    </div>
{/if}