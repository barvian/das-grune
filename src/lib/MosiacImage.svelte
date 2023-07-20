<script lang="ts">
    import Img from '$lib/Image.svelte'
	import { observe } from '$lib/actions'
    import type { ComponentProps } from 'svelte'
	import { fly } from 'svelte/transition'
    import { expoOut } from 'svelte/easing'
    
    export let src: ComponentProps<Img>['src']
    export let alt: ComponentProps<Img>['alt']

    let cls = ''
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
    
    
    // TODO: this is a roundabout way to get the pixel data, that could/should probably
    // be implemented as a directive with vite-imagetools (would work in SSR that way too)
    let pixels: [number, number, number, number][]
    $: if (lqip && entered) {
      const img = new Image()
      img.src = lqip.base64
      const canvas = new OffscreenCanvas(Math.floor(lqip.width), Math.floor(lqip.height))
      const ctx = canvas.getContext('2d')
      ctx?.drawImage(img, 0, 0)
      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height)
      if (imageData) {
          const newPixels: typeof pixels = []
          for (let i = 0; i < canvas.width * canvas.height * 4; i += 4) {
            newPixels.push([imageData.data[i], imageData.data[i+1], imageData.data[i+2], imageData.data[i+3]])
          }
          pixels = newPixels
      }
    }
</script>

{#if src?.length}
    <div
        class="relative"
        use:observe
        on:enter|once={() => entered = true}
    >
        <img class="absolute top-0 left-0 w-full h-full rendering-pixelated" src={lqip.base64} alt="" />
        <Img class="relative {cls}" src={sources} {alt} bind:loaded bind:ref on:click {...$$restProps} />
        {#if pixels && !loaded}
            <div class="grid absolute inset-0" style:grid-template-rows="repeat({Math.floor(lqip.height)}, minmax(0, 1fr))" style:grid-template-columns="repeat({Math.floor(lqip.width)}, minmax(0, 1fr))">
                {#each pixels as p, i}
                    {@const opt = [{ x: '-100%' }, { x: '100%' }, { y: '-100%' }, { y: '100%'}][Math.floor(Math.random()*4)]}
                    <div class="overflow-hidden"><div out:fly|global={{...opt, duration: 700, delay: i*1.5, opacity: 1, easing: expoOut}} class="w-full h-full" style:background-color="rgba({p[0]},{p[1]},{p[2]},{p[3] / 255})" /></div>
                {/each}
            </div>
        {/if}
    </div>
{/if}