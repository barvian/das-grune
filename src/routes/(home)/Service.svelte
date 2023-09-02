<script lang="ts">
	import Img from '$lib/MosaicImage.svelte'
	import { observe } from '$lib/actions'
	import type { ComponentProps } from 'svelte'

	export let label: string
	export let img: ComponentProps<Img>['src']
	let loaded = false
</script>

<li
	class="@container cursor-not-allowed flex items-stretch w-full relative ~text-4xl/6xl leading-[1.05] group border-b border-gray-800"
	use:observe
>
	<!-- Hover BG -->
	<div
		class="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition duration-300"
	/>
	<div
		class="flex px-[4.5cqw] py-[max(4.5cqw,1.75rem)] flex-1 flex-shrink-0 items-end whitespace-nowrap"
	>
		<div class="slide-up">
			<div class="inline-overlap overflow-hidden font-medium">
				<span
					class="inline-block text-gray-600 transition duration-500 ease-out-expo group-hover:-translate-y-full"
					>{label}</span
				>
				<span
					class="inline-block text-gray-350 font-semibold translate-y-full group-hover:translate-y-0 transition duration-500 ease-out-expo"
					aria-hidden>{label}</span
				>
			</div>
		</div>
		<span class="block overflow-hidden relative -top-[0.2em] ml-[2%]" aria-hidden>
			<span
				class="block h-[0.25em] rounded-full aspect-square bg-lime-300 group-hover:translate-y-0 translate-y-[101%] group-hover:delay-[50ms] transition duration-500 ease-out-expo"
				>.</span
			>
		</span>
	</div>
	<div class="relative hidden @lg:block">
		<div class="absolute bottom-0 aspect-square h-[175%] right-0 pointer-events-none">
			<div class="overflow-hidden absolute inset-0 translate-x-[3%] translate-y-[3%]">
				<div
					class="h-full w-full bg-lime-300 rounded-t-[15%] group-hover:translate-y-0 group-hover:delay-[50ms] translate-y-[101%] transition duration-700 ease-out-expo"
				/>
			</div>
			<div class="absolute inset-0 overflow-hidden">
				<div
					class="h-full w-full rounded-t-[15%] overflow-hidden group-hover:translate-y-0 group-hover:delay-[50ms] translate-y-[101%] transition duration-700 ease-out-expo"
				>
					<Img src={img} alt="{label} preview" bind:loaded />
				</div>
			</div>
		</div>
	</div>
	<div class="slide-up pr-[3%] pl-[4%] hidden @md:block">
		<div class="delay-[50ms] h-full overlap items-center justify-items-center relative">
			<svg class="h-[4.25cqw]" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					class="fill-gray-600"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M46.9644 5.5H4.21734V0.5H55.4999V51.7826H50.4999V9.03554L3.76771 55.7678L0.232178 52.2322L46.9644 5.5Z"
				/>
			</svg>
			<div
				class="h-[8.5cqw] aspect-square flex items-center justify-center bg-lime-300 clip-path-inset-[100%_0_0] group-hover:clip-path-inset-[0] transition-[clip-path] ease-out-expo duration-700"
			>
				<svg class="h-1/2" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						class="fill-gray-900"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M46.9644 5.5H4.21734V0.5H55.4999V51.7826H50.4999V9.03554L3.76771 55.7678L0.232178 52.2322L46.9644 5.5Z"
					/>
				</svg>
			</div>
		</div>
	</div>
</li>
