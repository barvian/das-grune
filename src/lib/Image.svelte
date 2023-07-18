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
        // reset and kick off an animation
        pxIndex = 0
        completed = false
        animate()
    }
    
    let completed = false
    let pxIndex = 0
    const pxFactorValues = [0.01, 0.02, 0.04, 0.08/*, 0.16*/]
    function animate() {
        if (pxIndex >= pxFactorValues.length) {
            completed = true
            return
        }

        setTimeout(() => {
            render()
            pxIndex++
            animate();
        }, 80)
    }

    let canvas: HTMLCanvasElement
    $: context = canvas?.getContext('2d')
    function render() {
        if (!ref || !context) return

        const amt = pxFactorValues[pxIndex]
        const w = ref?.width * amt, h = ref?.height * amt

        context.imageSmoothingEnabled = false

        // render smaller image
        context?.drawImage(ref, 0, 0, w, h)
        // stretch the smaller image
        context?.drawImage(canvas, 0, 0, w, h, -ref.width * 0.025, -ref.height * 0.025, ref.width * 1.05, ref.height * 1.05) // increase height to not have a gap at the end of the image with big pixels
    }
    
    onMount(() => {
      mounted = true
      if (ref.complete) loaded = true
    })
</script>

{#if src.length}
    <div
        class="relative overflow-hidden slide-up"
        use:observe
        on:enter={() => inview = true}
    >
        <img class="absolute top-0 left-0 w-full h-full object-cover rendering-pixelated" src={lqip} alt="" />
        <canvas bind:this={canvas} width={ref?.width} height={ref?.height} class="absolute rendering-pixelated top-0 left-0 w-full" />
        <Img class="relative {cls} {completed ? '' : 'invisible'}" src={sources} bind:ref on:load={() => loaded = true} on:click {...$$restProps} />
    </div>
{/if}