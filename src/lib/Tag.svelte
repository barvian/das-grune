<script lang="ts">
	let cls =''
    export { cls as class }
    export let style = ''
</script>

<div class="w-min slide-up">
    <div class="flex whitespace-nowrap items-center text-xl rounded-full border px-5 py-2.5 gap-2.5 {cls}" {style}>
        <slot />
    </div>
</div>