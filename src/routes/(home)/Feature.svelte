<script lang="ts">
	import Img from '$lib/MosaicImage.svelte'
	import { spring, type Spring } from 'svelte/motion'
	import type { ComponentProps } from 'svelte'

	export let src: ComponentProps<Img>['src']
	export let alt: ComponentProps<Img>['alt']

	let coords: Spring<{ x: number; y: number }>
	$: if (contentRect && !coords)
		coords = spring(initial, {
			stiffness: 0.025,
			damping: 0.35
		})

	let hovering = false,
		contentRect: DOMRectReadOnly,
		loaded = false
	$: initial = contentRect && { x: contentRect.width * 0.86, y: contentRect.height * 0.05 }
	$: if (!hovering && contentRect) {
		coords?.set(initial)
	}
</script>

<!-- CSS hover includes arrow even if it's out of bounds of the image, hovering var is only bounds -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<a
	href="#work"
	class="relative block group @container"
	bind:contentRect
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
	on:mousemove={(e) => {
		const rect = e.currentTarget.getBoundingClientRect()
		if (
			e.clientX < rect.left ||
			e.clientX > rect.left + rect.width ||
			e.clientY < rect.top ||
			e.clientY > rect.top + rect.height
		) {
			hovering = false
		} else {
			hovering = true
			// This was more reliable than offsetX/Y
			coords?.set({ x: e.clientX - rect.left, y: e.clientY - rect.top })
		}
	}}
>
	<div class="overflow-hidden rounded-t-[9cqw]">
		<Img {src} {alt} class="w-full" bind:loaded />
	</div>
	{#if coords}
		<div
			class="w-[18%] hidden @xl:block aspect-square absolute top-0 left-0 overflow-hidden z-10"
			style:transform="translate(calc({$coords.x}px - 50%), calc({$coords.y}px - 50%))"
		>
			<div
				class="bg-gray-800 absolute inset-0 rounded-full {!loaded
					? 'translate-y-full'
					: ''} transition-transform duration-1000 ease-out-expo"
			>
				<div
					class="bg-gray-900 absolute inset-0 rounded-full group-hover:opacity-100 opacity-0 transition duration-300"
				/>
				<div
					class="bg-gray-900 absolute inset-2 rounded-full group-hover:scale-[97.5%] transition overflow-hidden"
				>
					<div
						class="opacity-0 group-hover:opacity-100 bg-lime-200 transition duration-300 absolute inset-0"
					/>
					<div class="-rotate-45 w-[200%] origin-[75%_50%] right-0 absolute h-full top-0">
						<div
							class="w-1/2 absolute right-0 top-0 h-full group-hover:translate-x-full transition duration-300 flex items-center justify-center"
						>
							<svg class="h-1/2" viewBox="0 0 88 85" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									class="fill-lime-200"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M70.5446 38.25L39.3357 7.04109L45.6997 0.67713L87.7725 42.75L45.6997 84.8228L39.3357 78.4589L70.5446 47.25L0.0912681 47.25L0.0912648 38.25H70.5446Z"
								/>
							</svg>
						</div>
						<div
							class="w-1/2 absolute left-0 top-0 h-full group-hover:translate-x-full transition duration-300 flex items-center justify-center"
						>
							<svg class="h-1/2" viewBox="0 0 88 85" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									class="fill-gray-900"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M70.5446 38.25L39.3357 7.04109L45.6997 0.67713L87.7725 42.75L45.6997 84.8228L39.3357 78.4589L70.5446 47.25L0.0912681 47.25L0.0912648 38.25H70.5446Z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</a>
