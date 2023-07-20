<script lang="ts">
	import Img from "$lib/Image.svelte"
    import type { ComponentProps } from "svelte"

    export let label: string
    export let img: ComponentProps<Img>['src']
    let loaded = false
</script>

<li class="text-6xl px-[5%] cursor-not-allowed relative">
    {label}
    <Img src={img} alt="{label} preview" bind:loaded class="absolute w-20 right-0 bottom-0" />
</li>
