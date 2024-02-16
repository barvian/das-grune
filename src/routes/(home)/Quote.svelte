<script lang="ts">
	import { observe } from '$lib/actions'
	import { onMount } from 'svelte'
	import { spring } from 'svelte/motion'

	let el: HTMLElement
	let split = false,
		entered = false
	onMount(async () => {
		const { default: Splitting } = await import('splitting')
		const directions = ['top', 'bottom', 'left', 'right']
		Splitting({ target: el })[0].chars.forEach((char: HTMLSpanElement) => {
			char.classList.add(`slide-from-${directions[Math.floor(Math.random() * directions.length)]}`)
			const wrap = document.createElement('span')
			wrap.classList.add('char-wrap')
			char.replaceWith(wrap)
			wrap.appendChild(char)
		})
		split = true
		handleScroll()
	})

	let progress = spring(0, { stiffness: 0.025, damping: 0.35 })
	function handleScroll() {
		if (!split || !el) return
		const rect = el.getBoundingClientRect()
		const p0 = window.innerHeight - /* scale factor */ rect.height * 0.5
		const p100 = window.innerHeight * 0.5 /* center of viewport */ - rect.height
		const newProgress = (rect.top - p0) / (p100 - p0)
		if (newProgress > $progress) $progress = newProgress
		if ($progress >= 1) window.removeEventListener('scroll', handleScroll)
	}
</script>

<blockquote
	class="bg-gray-800 text-gray-350 invisible fonts-loaded:visible uppercase text-[9cqw]/[0.95] @xl:text-[6.9cqw]/[0.95] px-[7.5%] py-[12%] @xl:p-[10%] font-medium tracking-[0.01em]"
>
	<p
		class="flex flex-wrap justify-between items-baseline gap-[0.1em] no-js:[--progress:1]"
		bind:this={el}
		class:invisible={!split}
		style:--progress={$progress}
		use:observe={0}
		on:enter={() => {
			window.addEventListener('scroll', handleScroll)
			window.addEventListener('resize', handleScroll)
		}}
		on:leave={() => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleScroll)
		}}
	>
		<slot />
	</p>
</blockquote>

<style lang="postcss">
	blockquote :global(.whitespace) {
		display: none;
	}

	blockquote :global(.word) {
		display: flex;
		align-items: baseline;
	}

	blockquote :global(.char-wrap) {
		display: block;
		overflow: hidden;
	}

	blockquote :global(.char) {
		display: block;
		color: transparent;
		/* This makes sense if you think about it as a timeline of animations, with the progress as the playhead */
		--percentage: clamp(0, var(--progress) / ((var(--char-index) + 1) / var(--char-total)), 1);
		/* --percentage: clamp(0, (var(--progress) - (var(--char-index) / var(--char-total))) / (1 / var(--char-total)), 1); */
	}

	blockquote :global(.char::before),
	blockquote :global(.char::after) {
		@apply text-gray-350 transition duration-[2s] ease-out;
		content: attr(data-char);
		position: absolute;
		top: 0;
		left: 0;
	}

	blockquote :global(.char:hover::before),
	blockquote :global(.char:hover::after) {
		@apply ease-out-expo duration-[600ms];
	}

	@media reader, speech, aural {
		blockquote :global(.whitespace) {
			display: inline;
		}
		blockquote :global(.char) {
			@apply text-gray-350;
		}

		blockquote :global(.char::before),
		blockquote :global(.char::after) {
			display: none;
			visibility: hidden;
		}
	}

	blockquote :global(.char.slide-from-right) {
		transform: translateX(calc(100% - 100% * var(--percentage)));
	}

	blockquote :global(.char.slide-from-right::before) {
		transform: translateX(100%);
	}

	blockquote :global(.char.slide-from-right:hover::before) {
		transform: translateX(0%);
	}

	blockquote :global(.char.slide-from-right:hover::after) {
		transform: translateX(-100%);
	}

	blockquote :global(.char.slide-from-left) {
		transform: translateX(calc(100% * var(--percentage) - 100%));
	}

	blockquote :global(.char.slide-from-left::before) {
		transform: translateX(-100%);
	}

	blockquote :global(.char.slide-from-left:hover::before) {
		transform: translateX(0%);
	}

	blockquote :global(.char.slide-from-left:hover::after) {
		transform: translateX(100%);
	}

	blockquote :global(.char.slide-from-bottom) {
		transform: translateY(calc(100% - 100% * var(--percentage)));
	}

	blockquote :global(.char.slide-from-bottom::before) {
		transform: translateY(100%);
	}

	blockquote :global(.char.slide-from-bottom:hover::before) {
		transform: translateY(0%);
	}

	blockquote :global(.char.slide-from-bottom:hover::after) {
		transform: translateY(-100%);
	}

	blockquote :global(.char.slide-from-top) {
		transform: translateY(calc(100% * var(--percentage) - 100%));
	}

	blockquote :global(.char.slide-from-top::before) {
		transform: translateY(-100%);
	}

	blockquote :global(.char.slide-from-top:hover::before) {
		transform: translateY(0%);
	}

	blockquote :global(.char.slide-from-top:hover::after) {
		transform: translateY(100%);
	}
</style>
