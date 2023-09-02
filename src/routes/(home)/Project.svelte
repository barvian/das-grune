<script lang="ts">
	import Img from '$lib/MosaicImage.svelte'
	import type { ComponentProps } from 'svelte'

	let cls = ''
	export { cls as class }
	export let label: string
	export let year: string
	export let img: ComponentProps<Img>['src']

	export let cropped = false
</script>

<li class="{cls} overflow-hidden relative group cursor-not-allowed">
	<Img
		src={img}
		alt="{label} preview"
		class="{cropped
			? 'max-w-none h-full w-auto top-0 left-0'
			: ''} bg-gray-600 scale-105 group-hover:scale-100 transition duration-700 ease-out-expo"
		wrapperClass="{cropped ? '!absolute top-0 left-0' : ''} h-full"
	/>
	<div
		class="bg-gray-800 opacity-0 group-hover:opacity-[85%] transition duration-300 absolute inset-0"
	/>
	<div class="absolute bottom-4 left-4 right-4">
		<div class="overflow-hidden">
			<div
				class="translate-y-full fonts-loaded:group-hover:translate-y-0 ~text-lg/2xl text-gray-300 font-medium transition ease-out-expo duration-700 group-hover:delay-100"
			>
				{year}
			</div>
		</div>
		<div class="overflow-hidden">
			<div
				class="translate-y-full fonts-loaded:group-hover:translate-y-0 ~text-4xl/6xl leading-[1.05] font-medium tracking-[0.02em] text-gray-350 transition ease-out-expo duration-700"
			>
				{label}
			</div>
		</div>
	</div>
	<div
		class="h-[max(20%,3rem)] absolute top-0 right-0 aspect-square flex items-center justify-center bg-lime-300 clip-path-inset-[100%_0_0] group-hover:clip-path-inset-[0] transition-[clip-path] ease-out-expo duration-700"
	>
		<svg
			class="h-1/2 -translate-x-[200%] translate-y-[200%] group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 group-hover:delay-[50ms] ease-out-expo"
			viewBox="0 0 56 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				class="fill-gray-900"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M46.9644 5.5H4.21734V0.5H55.4999V51.7826H50.4999V9.03554L3.76771 55.7678L0.232178 52.2322L46.9644 5.5Z"
			/>
		</svg>
	</div>
</li>
