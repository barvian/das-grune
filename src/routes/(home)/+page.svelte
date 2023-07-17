<script lang="ts">
	import { observe } from '$lib/actions'
	import Marquee from './Marquee.svelte'
	import Crown from '$lib/icons/Crown.svelte'
	import Globe from '$lib/icons/Globe.svelte'
	import ballerina from './ballerina.jpg?run'
	import Quote from './Quote.svelte'
	import Image from '$lib/Image.svelte'
</script>

<svelte:head>
	<title>Das Grüne</title>
	<meta name="description" content="Maxwell Barvian's take on One Week Wonder's design." />
</svelte:head>

<header class="bg-[#d5ff3f] pt-10">
	<nav class="container flex items-center gap-[8%] mb-20" use:observe>
		<a href="/" class="slide-up font-medium text-2xl mr-auto"><span class="inline-block">Das Grüne</span></a>
		<span class="cursor-not-allowed text-xl slide-up"><span class="inline-block delay-[100ms]">About Us</span></span>
		<span class="cursor-not-allowed text-xl slide-up"><span class="inline-block delay-[150ms]">Project</span></span>
		<span class="cursor-not-allowed text-xl slide-up"><span class="inline-block delay-[200ms]">Services</span></span>
		<span class="cursor-not-allowed text-xl slide-up"><span class="inline-block delay-[250ms]">Let's Talk</span></span>
	</nav>
	<div class="container @container" use:observe>
		<div class="flex items-center justify-start gap-[1.1%] pl-[0.5%] mb-[1%]">
			<div aria-hidden class="w-[2%] slide-up"><div class="w-full rounded-full aspect-square bg-current" /></div>
			<div aria-hidden class="w-[2%] slide-up"><div class="w-full rounded-full aspect-square bg-current delay-[50ms]" /></div>
		</div>
		<div class="flex gap-[3%]">
			<h1 class="font-bold text-[15cqw]/[0.75] uppercase">
				<span class="slide-up inline-block"><span class="inline-block">Digitize</span></span>
				<span class="slide-up inline-block"><span class="inline-block">ideas</span></span>
			</h1>
			<div class="w-full relative flex flex-col justify-start items-center">
				<div class="absolute bottom-[3.5%] right-0 w-[31rem] text-2xl/[1.45] text-[#141a05] slide-up">
					<p class="delay-[50ms]">
						The art of visual communication, creatively impacting the world around us&mdash;one good design at a time, design like you mean it!
					</p>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-start gap-5 mt-10">
			<span class="inline-block slide-up">
				<span class="flex items-center text-xl rounded-full border px-4 py-2.5 gap-2.5 delay-[50ms]">
					<Crown class="w-5" />
					2022 Best Agency
				</span>
			</span>
			<span class="inline-block slide-up">
				<span class="flex items-center text-xl rounded-full border px-4 py-2.5 gap-2.5 delay-[100ms]">
					<Globe class="w-5" />
					World Class Agency
				</span>
			</span>
		</div>
	</div>
	<div class="container mt-24">
		<div class="overflow-hidden rounded-t-[100px]">
			<Image src={ballerina} alt="" class="w-full" />
		</div>
	</div>
</header>
<Marquee />
<section class="bg-[#171717]">
	<div class="container">
		<header>
			<h2 class="text-[#c4c4c4] font-bold text-8xl -tracking-[0.025em] uppercase">
				Our services
				<div class="bg-[#d5ff3f] rounded-full inline-block align-baseline aspect-square h-5" aria-hidden />
			</h2>
			<p class="text-xl text-[#606060]">
				Every one of us loves something different. So, explore the world through the lens of our visual capabilities, and find what you love
			</p>
		</header>
		<ul>
			<li></li>
		</ul>
	</div>
</section>
<section class="bg-[#171717]">
	<div class="container">
		<Quote>
			A creative mind <span class="inline-block h-[1em] aspect-square bg-current" /> knows how to do the right thing at the right place and at the right time
		</Quote>
	</div>
</section>
<section id="discuss">
	<div class="container">
		<div class="bg-[#d5ff3f] rounded-b-full overflow-hidden">
			<h2 class="uppercase font-bold text-7xl lg:max-w-[10em] mx-auto text-center -tracking-[0.02em]">Let's discuss your ideas</h2>
			<div class="flex">
				<span class="cursor-not-allowed rounded-full">Talk now</span>
				<span class="cursor-not-allowed rounded-full">Follow us</span>
			</div>
		</div>
	</div>
</section>
<footer class="bg-[#171717] sticky bottom-0 -z-10">
	<div class="container text-center text-[#d5ff3f] pb-6 pt-20">
		<a href="/" class="text-6xl font-medium">Das Grüne</a>
		<div class="grid grid-cols-3 uppercase justify-between text-xl mt-20">
			<span class="cursor-not-allowed text-left">Terms &amp; agreements</span>
			<span>&copy;2022 Das Gurne All rights reserved</span>
			<span class="cursor-not-allowed text-right">Privacy Policy</span>
		</div>
	</div>
</footer>