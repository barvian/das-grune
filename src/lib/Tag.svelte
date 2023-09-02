<script lang="ts">
	let cls = ''
	export { cls as class }
	export let style = ''
</script>

<div class="w-min slide-up">
	<div
		class="flex whitespace-nowrap items-center ~text-lg/xl rounded-full border px-[1em] py-[0.5em] gap-[0.5em] {cls}"
		{style}
	>
		<slot />
	</div>
</div>
