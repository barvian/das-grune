<script lang="ts">
	import { observe } from "$lib/actions"
	import { onMount } from "svelte"
	import { spring } from "svelte/motion"

    let el: HTMLElement
    let split = false
    onMount(async () => {
        const { default: Splitting } = await import('splitting')
        const directions = ['top', 'bottom', 'left', 'right']
        Splitting({ target: el })[0].chars.forEach((char: HTMLSpanElement) => {
            char.classList.add(`slide-from-${directions[Math.floor(Math.random()*directions.length)]}`)
            const wrap = document.createElement('span')
            wrap.classList.add('char-wrap')
            char.replaceWith(wrap)
            wrap.appendChild(char)
        })
        split = true
        handleScroll()
    })

    let progress = spring(0, { stiffness: 0.1, damping: 0.5 })
    function handleScroll() {
        if (!split || !el) return
        const rect = el.getBoundingClientRect()
        const scrolled = (window.innerHeight - (/* scale factor */rect.height * 0.5)) - rect.top
        const newProgress = scrolled / rect.height
        if (newProgress > $progress) $progress = newProgress
        if ($progress >= 1) window.removeEventListener('scroll', handleScroll)
    }
</script>

<svelte:window on:resize={handleScroll} />
<blockquote class="bg-[#292929] uppercase text-[6.9cqw]/[0.95] p-[10%] font-medium tracking-[0.01em]"
>
    <p class="flex flex-wrap justify-between items-baseline gap-[0.1em]" bind:this={el} class:invisible={!split} style:--progress={$progress} use:observe={0}
    on:enter={() => window.addEventListener('scroll', handleScroll)}
on:leave={() => window.removeEventListener('scroll', handleScroll)}
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
        --percentage: clamp(0, (var(--progress) - (var(--char-index) / var(--char-total))) / (1 / var(--char-total)), 1);
    }

    blockquote :global(.char::before),
    blockquote :global(.char::after) {
        @apply text-[#c4c4c4] transition duration-[2s] ease-out;
        content: attr(data-char);
        position: absolute;
        top: 0;
        left: 0;
    }

    blockquote :global(.char:hover::before),
    blockquote :global(.char:hover::after) {
        @apply ease-out-expo duration-700;
    }

    @media reader, speech, aural {
        blockquote :global(.char) {
            @apply text-[#c4c4c4]
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