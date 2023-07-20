<script lang="ts">
	import { observe } from '$lib/actions'
	import Marquee from './Marquee.svelte'
	import Crown from '$lib/icons/Crown.svelte'
	import Globe from '$lib/icons/Globe.svelte'
	import Twinkle from '$lib/icons/Twinkle.svelte'
	import Quote from './Quote.svelte'
	import Image from '$lib/MosiacImage.svelte'
	import Feature from './Feature.svelte'
	import ballerina from '$lib/img/ballerina.jpg?run'
	import swirl from '$lib/img/swirl.jpg?run&aspect=405:370'
	import vid from '$lib/img/vid.jpg?run'
	import Service from './Service.svelte'

	const services = [['UI/UX Design', swirl]]
</script>

<svelte:head>
	<title>Das Grüne</title>
	<meta name="description" content="Maxwell Barvian's take on One Week Wonder's design." />
</svelte:head>

<!-- TODO: tailwind vars for common colors -->
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
			<div class="w-full relative flex flex-col gap-[8%] justify-start items-center">
				<div class="slide-up delay-[50ms]">
					<div class="rounded-full overflow-hidden relative cursor-not-allowed group border-4 border-[#bbe132]">
						<Image src={vid} alt="Teaser video" />
						<div class="transition duration-300 group-hover:translate-x-4 rounded-full absolute top-1.5 left-1.5 aspect-square h-[calc(100%-theme(spacing[1.5])*2)]">
							<div class="absolute inset-0 rounded-full overflow-hidden bg-[#292929]">
								<div class="absolute inset-0 bg-[#101010] opacity-0 group-hover:opacity-100 transition duration-300" />
								<div class="absolute inset-1 rounded-full overflow-hidden bg-[#101010] flex items-center justify-center">
									<div class="absolute inset-0 bg-[#d5ff3f] transition duration-300 opacity-0 group-hover:opacity-100" />
									<div class="overlap items-center justify-center h-2/5 ml-[5%]">
										<svg class="h-full relative group-hover:translate-x-[220%] transition duration-300" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M22.7964 12.4382C24.7148 13.6073 24.7148 16.3926 22.7964 17.5618L4.5612 28.6748C2.56205 29.8931 -1.02334e-07 28.4541 0 26.113L9.7153e-07 3.88699C1.07386e-06 1.54585 2.56206 0.106891 4.56121 1.32522L22.7964 12.4382Z" fill="#D5FF3F"/>
										</svg>
										<svg class="h-full relative -translate-x-[220%] group-hover:translate-x-0 transition duration-300" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M22.7964 12.4382C24.7148 13.6073 24.7148 16.3926 22.7964 17.5618L4.5612 28.6748C2.56205 29.8931 -1.02334e-07 28.4541 0 26.113L9.7153e-07 3.88699C1.07386e-06 1.54585 2.56206 0.106891 4.56121 1.32522L22.7964 12.4382Z" fill="#101010"/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex gap-[20%] w-full justify-center items-center text-[#bce138]">
					<div class="slide-up"><Twinkle class="h-7" /></div>
					<div class="slide-up"><Twinkle class="h-7 delay-[50ms]" /></div>
					<div class="slide-up"><Twinkle class="h-7 delay-[100ms]" /></div>
				</div>
				<div class="absolute bottom-[3.5%] right-0 w-[31rem] text-2xl/[1.45] text-[#141a05] slide-up">
					<p class="delay-[50ms]">
						The art of visual communication, creatively impacting the world around us&mdash;one good design at a time, design like you mean it!
					</p>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-start gap-5 mt-10">
			<span class="inline-block slide-up">
				<span class="flex items-center text-xl rounded-full border px-5 py-2.5 gap-2.5 delay-[50ms]">
					<Crown class="w-5" />
					2022 Best Agency
				</span>
			</span>
			<span class="inline-block slide-up">
				<span class="flex items-center text-xl rounded-full border px-5 py-2.5 gap-2.5 delay-[100ms]">
					<Globe class="w-5" />
					World Class Agency
				</span>
			</span>
			<div class="flex items-center flex-1">
				<div class="bg-[#bce138] w-1.5 aspect-square rounded-full scale-0 fonts-loaded:entered:scale-100 transition-transform duration-300 delay-[250ms] ease-out-expo" />
				<div class="bg-[#bce138] h-0.5 flex-1 origin-left scale-x-0 fonts-loaded:entered:scale-x-100 transition-transform duration-1000 delay-[300ms]" />
				<div class="bg-[#bce138] w-1.5 aspect-square rounded-full  scale-0 fonts-loaded:entered:scale-100 transition-transform duration-300 delay-[1350ms] ease-out-expo" />
			</div>
			<svg class="h-6 text-[#bce138]" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="12" cy="12" r="11.25" class="transition-[stroke-dashoffset] entered:[stroke-dashoffset:0] duration-1000 delay-[1000ms]" stroke-dasharray="70" stroke-dashoffset="-70" vector-effect="non-scaling-stroke" stroke="currentColor" stroke-width="1.5"/>
				<circle cx="29" cy="12" r="11.25" class="transition-[stroke-dashoffset] entered:[stroke-dashoffset:0] duration-1000 delay-[1250ms]" stroke-dasharray="70" stroke-dashoffset="-70" vector-effect="non-scaling-stroke" stroke="currentColor" stroke-width="1.5"/>
				<circle cx="46" cy="12" r="11.25" class="transition-[stroke-dashoffset] entered:[stroke-dashoffset:0] duration-1000 delay-[1500ms]" stroke-dasharray="70" stroke-dashoffset="-70" vector-effect="non-scaling-stroke" stroke="currentColor" stroke-width="1.5"/>
			</svg>				
		</div>
	</div>
	<div class="container mt-24">
		<Feature src={ballerina} alt="Abstract ballerina artwork" />
	</div>
</header>
<Marquee />
<section class="bg-[#171717] pt-20">
	<div class="container">
		<header class="flex justify-between items-end mb-16 gap-[5%]" use:observe>
			<div>
				<h2 class="text-[#c4c4c4] font-bold text-8xl -tracking-[0.025em] uppercase whitespace-nowrap">
					<span class="inline-block align-baseline slide-up"><span class="inline-block">Our services</span></span>
					<!-- Picked a websafe font that has a circular period, to match baseline and transition: -->
					<span class="inline-block align-baseline slide-up relative -top-[0.025em]"><span class="text-[#d5ff3f] inline-block delay-[50ms] font-['Times_New_Roman']" aria-hidden>.</span></span>
				</h2>
				<div class="slide-up">
					<p class="text-xl text-[#606060] max-w-[45ch] delay-[50ms]">
						Every one of us loves something different. So, explore the world through the lens of our visual capabilities, and find what you love
					</p>
				</div>
			</div>
			<ul class="justify-end flex flex-wrap gap-5">
				<li>
					<a class="text-[#c4c4c4] inline-flex items-center text-xl rounded-full border px-5 py-2.5 gap-2.5 delay-[100ms] whitespace-nowrap">
						<Globe class="w-5" />
						Design
					</a>
				</li>
				<li>
					<a class="text-[#606060] inline-flex cursor-not-allowed items-center text-xl rounded-full border px-5 py-2.5 gap-2.5 delay-[100ms] whitespace-nowrap">
						<Globe class="w-5" />
						Development
					</a>
				</li>
				<li>
					<a class="text-[#606060] inline-flex cursor-not-allowed items-center text-xl rounded-full border px-5 py-2.5 gap-2.5 delay-[100ms] whitespace-nowrap">
						<Globe class="w-5" />
						Digital Marketing
					</a>
				</li>
				<li>
					<a class="text-[#606060] inline-flex cursor-not-allowed items-center text-xl rounded-full border px-5 py-2.5 gap-2.5 delay-[100ms] whitespace-nowrap">
						<Globe class="w-5" />
						SEO
					</a>
				</li>
			</ul>
		</header>
		<ul>
			<Service label="UI Design" img={swirl} />
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
<section id="work" class="bg-[#171717] py-24">
	<div class="container">
		<header use:observe>
			<div class="flex justify-between items-center mb-2 gap-[5%]">
				<h2 class="text-[#c4c4c4] font-bold text-8xl -tracking-[0.025em] uppercase whitespace-nowrap">
					<span class="inline-block align-baseline slide-up"><span class="inline-block">Best Project</span></span>
					<!-- Picked a websafe font that has a circular period, to match baseline and transition: -->
					<span class="inline-block align-baseline slide-up relative -top-[0.025em]"><span class="text-[#d5ff3f] inline-block delay-[50ms] font-['Times_New_Roman']" aria-hidden>.</span></span>
				</h2>
				<div class="slide-up">
					<p class="text-xl text-[#606060] max-w-[45ch] delay-[50ms]">
						Creative fuels design, design fuels creativity, be here for more, are you in love with a creative?
					</p>
				</div>
			</div>
			<ul class="justify-start flex flex-wrap gap-5">
				<li>
					<a class="text-[#c4c4c4] inline-flex items-center text-xl rounded-full border px-5 py-2.5 gap-2.5 delay-[100ms] whitespace-nowrap">
						<Globe class="w-5" />
						Design
					</a>
				</li>
				<li>
					<a class="text-[#606060] cursor-not-allowed inline-flex items-center text-xl rounded-full border px-5 py-2.5 gap-2.5 delay-[100ms] whitespace-nowrap">
						<Globe class="w-5" />
						Development
					</a>
				</li>
				<li>
					<a class="text-[#606060] cursor-not-allowed inline-flex items-center text-xl rounded-full border px-5 py-2.5 gap-2.5 delay-[100ms] whitespace-nowrap">
						<Globe class="w-5" />
						Digital Marketing
					</a>
				</li>
				<li>
					<a class="text-[#606060] cursor-not-allowed inline-flex items-center text-xl rounded-full border px-5 py-2.5 gap-2.5 delay-[100ms] whitespace-nowrap">
						<Globe class="w-5" />
						SEO
					</a>
				</li>
			</ul>
		</header>
		<ul class="grid grid-cols-3 gap-[2.5%]">
			<li class="overflow-hidden">
				<Image src={swirl} class="" />
			</li>
			<li class="col-span-2 overflow-hidden">
				<Image src={swirl} class="" />
			</li>
		</ul>
	</div>
</section>
<section id="discuss">
	<div class="container">
		<div class="bg-[#d5ff3f] rounded-b-[8.375rem] overflow-hidden px-[5%] py-20" use:observe>
			<div class="flex w-full items-center gap-[5%] mb-16 text-[#bce138]">
				<!-- Left line -->
				<div class="flex items-center flex-1">
					<div class="bg-[#bce138] w-1.5 aspect-square rounded-full scale-0 fonts-loaded:entered:scale-100 transition-transform duration-300 delay-[850ms] ease-out-expo" />
					<div class="bg-[#bce138] h-0.5 flex-1 origin-right scale-x-0 fonts-loaded:entered:scale-x-100 transition-transform duration-500 delay-[300ms]" />
					<div class="bg-[#bce138] w-1.5 aspect-square rounded-full  scale-0 fonts-loaded:entered:scale-100 transition-transform duration-300 ease-out-expo" />
				</div>
				<div class="slide-up relative -top-3"><Twinkle class="h-7 delay-[50ms]" /></div>
				<div class="slide-up relative -top-3"><Twinkle class="h-7" /></div>
				<div class="slide-up relative -top-3"><Twinkle class="h-7 delay-[50ms]" /></div>
				<!-- Right line -->
				<div class="flex items-center flex-1">
					<div class="bg-[#bce138] w-1.5 aspect-square rounded-full  scale-0 fonts-loaded:entered:scale-100 transition-transform duration-300 ease-out-expo" />
					<div class="bg-[#bce138] h-0.5 flex-1 origin-left scale-x-0 fonts-loaded:entered:scale-x-100 transition-transform duration-500 delay-[300ms]" />
					<div class="bg-[#bce138] w-1.5 aspect-square rounded-full scale-0 fonts-loaded:entered:scale-100 transition-transform duration-300 delay-[850ms] ease-out-expo" />
				</div>
			</div>
			<h2 class="uppercase font-bold text-7xl lg:max-w-[10em] mx-auto text-center -tracking-[0.02em] slide-up">
				<span class="block">Let's discuss your ideas</span>
			</h2>
			<div class="flex justify-center w-full gap-5 mt-16">
				<div class="slide-up">
					<div class="cursor-not-allowed block relative rounded-full overflow-hidden text-2xl/none font-medium uppercase tracking-[0.02em] bg-black px-10 pt-5 pb-4 text-[#d5ff3f] group">
						<div class="group-hover:opacity-100 opacity-0 bg-[#292929] absolute inset-0 transition duration-150" />
						<div class="overlap overflow-hidden">
							<span class="inline-block group-hover:-translate-y-full transition duration-500 ease-out-expo">Talk now</span>
							<span class="inline-block translate-y-full group-hover:translate-y-0 transition duration-500 ease-out-expo" aria-hidden>Talk now</span>
						</div>
					</div>
				</div>
				<div class="slide-up">
					<div class="cursor-not-allowed block relative rounded-full overflow-hidden text-2xl/none font-medium uppercase tracking-[0.02em] shadow-[inset_0_0_0_2px_currentColor] px-10 pt-5 pb-4 group">
						<div class="overlap overflow-hidden">
							<span class="inline-block group-hover:-translate-y-full transition duration-500 ease-out-expo">Talk now</span>
							<span class="inline-block translate-y-full group-hover:translate-y-0 transition duration-500 ease-out-expo" aria-hidden>Talk now</span>
						</div>
					</div>
				</div>
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