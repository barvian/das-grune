<script lang="ts">
	import { observe } from '$lib/actions'
	import Marquee from './Marquee.svelte'
	import Crown from '$lib/icons/Crown.svelte'
	import Globe from '$lib/icons/Globe.svelte'
	import Twinkle from '$lib/icons/Twinkle.svelte'
	import Quote from './Quote.svelte'
	import Project from './Project.svelte'
	import Image from '$lib/MosaicImage.svelte'
	import Feature from './Feature.svelte'
	import ballerina from '$lib/img/ballerina.jpg?run&lqip=16'
	import brand from '$lib/img/services/brand.jpg?run&lqip=8'
	import graphic from '$lib/img/services/graphic.jpg?run&lqip=8'
	import ui from '$lib/img/services/ui.jpg?run&lqip=8'
	import web from '$lib/img/services/web.jpg?run&lqip=8'
	import diamond from '$lib/img/quote/diamond.jpg?run&lqip=3'
	import wave from '$lib/img/quote/wave.jpg?run&lqip=7'
	import swirl from '$lib/img/quote/swirl.jpg?run&lqip=5'
	import diamonds from '$lib/img/projects/diamonds.jpg?run'
	import swirls from '$lib/img/projects/swirls.jpg?run'
	import swoosh from '$lib/img/projects/swoosh.jpg?run'
	import rainbow from '$lib/img/projects/rainbow.jpg?run'
	import waves from '$lib/img/projects/waves.jpg?run'
	import vid from '$lib/img/vid.jpg?run&lqip=10'
	import Service from './Service.svelte'
	import Tag from '$lib/Tag.svelte'

	const categories = ['Design', 'Development', 'Digital Marketing', 'SEO']
</script>

<svelte:head>
	<title>Das Grüne</title>
	<meta name="description" content="Maxwell Barvian's take on One Week Wonder's design." />
</svelte:head>

<!-- TODO: tailwind vars for common colors -->
<header class="bg-[#d5ff3f] pt-[clamp(theme(padding.5),4vw,theme(padding.10))]">
	<nav class="container flex items-center gap-[8%] mb-20 @container" use:observe>
		<a href="/" class="slide-up font-medium text-2xl mr-auto"><span class="inline-block">Das Grüne</span></a>
		<span class="cursor-not-allowed text-xl slide-up @3xl:inline-block hidden"><span class="inline-block delay-[100ms]">About Us</span></span>
		<span class="cursor-not-allowed text-xl slide-up @3xl:inline-block hidden"><span class="inline-block delay-[150ms]">Project</span></span>
		<span class="cursor-not-allowed text-xl slide-up @3xl:inline-block hidden"><span class="inline-block delay-[200ms]">Services</span></span>
		<span class="cursor-not-allowed text-xl slide-up @3xl:inline-block hidden"><span class="inline-block delay-[250ms]">Let's Talk</span></span>
		<div class="cursor-not-allowed @3xl:hidden space-y-1.5">
			<div class="slide-right"><div class="h-[2px] delay-[100ms] bg-current w-[30px]" /></div>
			<div class="slide-right"><div class="h-[2px] delay-[150ms] bg-current w-[30px]" /></div>
			<div class="slide-right"><div class="h-[2px] delay-[200ms] bg-current w-[30px]" /></div>
		</div>
	</nav>
	<div class="container @container" use:observe>
		<div class="flex items-center justify-start gap-[1.1%] pl-[0.5%] mb-[1%]">
			<div aria-hidden class="w-[2%] slide-up"><div class="w-full rounded-full aspect-square bg-current" /></div>
			<div aria-hidden class="w-[2%] slide-up"><div class="w-full rounded-full aspect-square bg-current delay-[50ms]" /></div>
		</div>
		<div class="flex flex-col gap-11 @3xl:gap-[3%] @3xl:flex-row">
			<h1 class="font-bold text-[22.5cqw]/[0.75] @3xl:text-[15cqw]/[0.75] uppercase">
				<span class="slide-up inline-block"><span class="inline-block">Digitize</span></span>
				<span class="slide-up inline-block"><span class="inline-block">ideas</span></span>
			</h1>
			<div class="w-full relative flex flex-col gap-[8%] justify-start items-center">
				<div class="slide-up delay-[100ms] hidden @3xl:block">
					<div class="rounded-full overflow-hidden relative cursor-not-allowed group border-4 border-[#bbe132]">
						<Image src={vid} alt="Teaser video" />
						<div class="transition duration-300 group-hover:translate-x-4 rounded-full absolute top-1.5 left-1.5 aspect-square h-[calc(100%-theme(spacing[1.5])*2)]">
							<div class="absolute inset-0 rounded-full overflow-hidden bg-[#292929]">
								<!-- <div class="absolute inset-0 bg-[#101010] opacity-0 group-hover:opacity-100 transition duration-300" /> -->
								<div class="absolute inset-1 rounded-full overflow-hidden bg-[#101010] flex items-center justify-center">
									<!-- <div class="absolute inset-0 bg-[#d5ff3f] transition duration-300 opacity-0 group-hover:opacity-100" /> -->
									<!-- <div class="overlap items-center justify-center h-2/5 ml-[5%]"> -->
										<svg class="h-2/5 relative ml-[5%]" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M22.7964 12.4382C24.7148 13.6073 24.7148 16.3926 22.7964 17.5618L4.5612 28.6748C2.56205 29.8931 -1.02334e-07 28.4541 0 26.113L9.7153e-07 3.88699C1.07386e-06 1.54585 2.56206 0.106891 4.56121 1.32522L22.7964 12.4382Z" fill="#D5FF3F"/>
										</svg>
										<!-- <svg class="h-full relative -translate-x-[100%] group-hover:translate-x-0 transition duration-300" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M22.7964 12.4382C24.7148 13.6073 24.7148 16.3926 22.7964 17.5618L4.5612 28.6748C2.56205 29.8931 -1.02334e-07 28.4541 0 26.113L9.7153e-07 3.88699C1.07386e-06 1.54585 2.56206 0.106891 4.56121 1.32522L22.7964 12.4382Z" fill="#101010"/>
										</svg> -->
									<!-- </div> -->
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="hidden @3xl:flex gap-[20%] w-full justify-center items-center text-[#bce138]">
					<div class="slide-up"><Twinkle class="h-7" /></div>
					<div class="slide-up"><Twinkle class="h-7 delay-[50ms]" /></div>
					<div class="slide-up"><Twinkle class="h-7 delay-[100ms]" /></div>
				</div>
				<div class="@3xl:absolute bottom-[3.5%] right-0 @3xl:w-[150%] @3xl:text-[2.25cqw]/[1.45] @5xl:text-2xl/[1.45] @5xl:w-[31rem] text-2xl/[1.45] text-[#141a05] slide-up">
					<p class="delay-[50ms]">
						The art of visual communication, creatively impacting the world around us&mdash;one good design at a time, design like you mean it!
					</p>
				</div>
			</div>
		</div>
		<div class="flex items-center flex-wrap @3xl:flex-nowrap justify-start gap-5 mt-10">
			<Tag class="delay-[50ms]">
				<Crown class="w-5 flex-shrink-0" />
				2022 Best Agency
			</Tag>
			<Tag class="delay-[100ms]">
				<Globe class="w-5 flex-shrink-0" />
				World Class Agency
			</Tag>
			<div class="hidden @3xl:flex items-center flex-1">
				<div class="bg-[#bce138] w-1.5 aspect-square rounded-full scale-0 entered-fonts-loaded:scale-100 transition-transform duration-300 delay-[250ms] ease-out-expo" />
				<div class="bg-[#bce138] h-0.5 flex-1 origin-left scale-x-0 entered-fonts-loaded:scale-x-100 transition-transform duration-1000 delay-[300ms]" />
				<div class="bg-[#bce138] w-1.5 aspect-square rounded-full  scale-0 entered-fonts-loaded:scale-100 transition-transform duration-300 delay-[1350ms] ease-out-expo" />
			</div>
			<svg class="hidden @3xl:block h-6 text-[#bce138]" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
<section class="bg-[#171717] pt-20 pb-32">
	<div class="container @container">
		<header class="flex flex-col @5xl:flex-row @5xl:justify-between @5xl:items-end mb-16 gap-12 @5xl:gap-[5%]" use:observe>
			<div>
				<h2 class="text-[#c4c4c4] font-bold text-7xl/[1] -tracking-[0.025em] uppercase @4xl:whitespace-nowrap">
					<span class="inline-block align-baseline slide-up"><span class="inline-block">Our <span class="whitespace-nowrap">services<span class="inline-block align-baseline slide-up pl-[0.2em]"><span class="bg-[#d5ff3f] block delay-[300ms] aspect-square w-[0.2em] rounded-full" aria-hidden /></span></span></span></span>
				</h2>
				<div class="slide-up">
					<p class="text-xl text-[#606060] max-w-[45ch] delay-[50ms]">
						Every one of us loves something different. So, explore the world through the lens of our visual capabilities, and find what you love
					</p>
				</div>
			</div>
			<ul class="justify-start @5xl:justify-end flex flex-wrap gap-5">
				{#each categories as label, i}
					<li>
						<Tag class="cursor-not-allowed {i == 0 ? 'text-[#c4c4c4]' : 'text-[#606060]' }" style="transition-delay: {i * 50 + 50}ms">
							<Globe class="w-5" />
							{label}
						</Tag>
					</li>
				{/each}
			</ul>
		</header>
		<ul class="border-t border-[#2b2b2b]">
			<Service label="UI/UX Design" img={ui} />
			<Service label="Web Design" img={web} />
			<Service label="Brand Design" img={brand} />
			<Service label="Graphic Design" img={graphic} />
		</ul>
	</div>
</section>
<section class="bg-[#171717]">
	<div class="container @container">
		<Quote>
			A creative
			<Image src={wave} wrapperClass="inline-block overflow-hidden rounded-full" class="h-[0.69em] w-auto" alt="" />
			mind 
			knows
			<Image src={diamond} wrapperClass="inline-block overflow-hidden rounded-full" class="h-[0.69em] w-auto" alt="" />
			how to do the
			<div class="inline-block slide-up h-[0.69em]">
				<div class="bg-[#d5ff3f] h-full w-[0.9em] rounded-full block relative overflow-hidden">
					<svg class="h-2/5 absolute top-1/2 left-1/2 entered:-translate-x-1/2 entered:-translate-y-1/2 -translate-x-[150%] translate-y-[150%] transition duration-700 ease-out delay-100" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1715 4H2.99991V0H26.9999V24H22.9999V6.82843L3.41412 26.4142L0.585693 23.5858L20.1715 4Z" fill="#1e1f1c"/>
					</svg>									
				</div>
			</div>
			right thing at the right place and at the
			<Image src={swirl} wrapperClass="inline-block overflow-hidden rounded-full" class="h-[0.69em] w-auto" alt="" />
			right
			<Image src={wave} wrapperClass="inline-block overflow-hidden rounded-full @xl:hidden" class="h-[0.69em] w-auto" alt="" />
			time
		</Quote>
	</div>
</section>
<section id="work" class="bg-[#171717] py-24">
	<div class="container @container">
		<header class="mb-16" use:observe>
			<div class="flex flex-col @3xl:flex-row @3xl:justify-between @3xl:items-center mb-2 gap-[5%]">
				<h2 class="text-[#c4c4c4] font-bold text-7xl/[1] -tracking-[0.025em] uppercase @4xl:whitespace-nowrap">
					<span class="inline-block align-baseline slide-up"><span class="inline-block">Best <span class="whitespace-nowrap">Project<span class="inline-block align-baseline slide-up pl-[0.2em]"><span class="bg-[#d5ff3f] block delay-[300ms] aspect-square w-[0.2em] rounded-full" aria-hidden /></span></span></span></span>
				</h2>
				<div class="slide-up">
					<p class="text-xl text-[#606060] max-w-[45ch] delay-[50ms]">
						Creative fuels design, design fuels creativity, be here for more, are you in love with a creative?
					</p>
				</div>
			</div>
			<ul class="justify-start flex flex-wrap gap-5 mt-12 @3xl:mt-0">
				{#each categories as label, i}
					<li>
						<Tag class="cursor-not-allowed {i == 0 ? 'text-[#c4c4c4]' : 'text-[#606060]' }" style="transition-delay: {i * 50 + 50}ms">
							<Globe class="w-5" />
							{label}
						</Tag>
					</li>
				{/each}
			</ul>
		</header>
		<!-- auto rows 1fr sets them to be equal based on the diamonds image (which isn't cropped) -->
		<ul class="grid grid-cols-1 @3xl:grid-cols-3 gap-8 @3xl:gap-[2cqw] auto-rows-[1fr]">
			<Project cropped year="2022" label="Gerades Haus" img={swirls} />
			<Project class="@3xl:col-span-2" year="2022" label="Gerades Haus" img={diamonds} />
			<Project cropped year="2022" label="Gerades Haus" img={waves} />
			<Project cropped year="2022" label="Gerades Haus" img={swoosh} />
			<Project cropped year="2022" label="Gerades Haus" img={rainbow} />
		</ul>
	</div>
</section>
<section id="discuss">
	<div class="container @container">
		<div class="bg-[#d5ff3f] rounded-b-[10cqw] overflow-hidden px-[max(theme(spacing.5),5%)] py-20" use:observe>
			<div class="hidden @3xl:flex w-full items-center gap-[5%] mb-16 text-[#bce138]">
				<!-- Left line -->
				<div class="flex items-center flex-1">
					<div class="bg-[#bce138] w-1.5 aspect-square rounded-full scale-0 entered-fonts-loaded:scale-100 transition-transform duration-300 delay-[850ms] ease-out-expo" />
					<div class="bg-[#bce138] h-0.5 flex-1 origin-right scale-x-0 entered-fonts-loaded:scale-x-100 transition-transform duration-500 delay-[300ms]" />
					<div class="bg-[#bce138] w-1.5 aspect-square rounded-full  scale-0 entered-fonts-loaded:scale-100 transition-transform duration-300 ease-out-expo" />
				</div>
				<div class="slide-up relative -top-3"><Twinkle class="h-7 delay-[50ms]" /></div>
				<div class="slide-up relative -top-3"><Twinkle class="h-7" /></div>
				<div class="slide-up relative -top-3"><Twinkle class="h-7 delay-[50ms]" /></div>
				<!-- Right line -->
				<div class="flex items-center flex-1">
					<div class="bg-[#bce138] w-1.5 aspect-square rounded-full  scale-0 entered-fonts-loaded:scale-100 transition-transform duration-300 ease-out-expo" />
					<div class="bg-[#bce138] h-0.5 flex-1 origin-left scale-x-0 entered-fonts-loaded:scale-x-100 transition-transform duration-500 delay-[300ms]" />
					<div class="bg-[#bce138] w-1.5 aspect-square rounded-full scale-0 entered-fonts-loaded:scale-100 transition-transform duration-300 delay-[850ms] ease-out-expo" />
				</div>
			</div>
			<h2 class="uppercase font-bold text-7xl/[1] lg:max-w-[10em] mx-auto text-center -tracking-[0.02em] slide-up">
				<span class="block">Let's discuss your ideas</span>
			</h2>
			<div class="flex flex-wrap justify-center w-full gap-5 mt-16">
				<div class="slide-up">
					<div class="cursor-not-allowed block relative rounded-full overflow-hidden text-2xl/none font-medium uppercase tracking-[0.02em] bg-black px-[2em] pt-[0.85em] pb-[0.8em] whitespace-nowrap text-[#d5ff3f] group">
						<div class="group-hover:opacity-100 opacity-0 bg-[#292929] absolute inset-0 transition duration-150" />
						<div class="overlap overflow-hidden text-center">
							<span class="inline-block group-hover:-translate-y-full transition duration-500 ease-out-expo">Talk now</span>
							<span class="inline-block translate-y-full group-hover:translate-y-0 transition duration-500 ease-out-expo font-semibold" aria-hidden>Talk now</span>
						</div>
					</div>
				</div>
				<div class="slide-up">
					<div class="cursor-not-allowed block relative rounded-full overflow-hidden text-2xl/none font-medium uppercase tracking-[0.02em] shadow-[inset_0_0_0_2px_currentColor] px-[2em] pt-[0.85em] pb-[0.8em] whitespace-nowrap group">
						<div class="overlap overflow-hidden text-center">
							<span class="inline-block group-hover:-translate-y-full transition duration-500 ease-out-expo">Follow us</span>
							<span class="inline-block translate-y-full group-hover:translate-y-0 transition duration-500 ease-out-expo font-semibold" aria-hidden>Follow us</span>
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
		<div class="flex lg:grid lg:grid-cols-3 uppercase justify-between text-xl mt-20">
			<span class="cursor-not-allowed text-left">Terms &amp; agreements</span>
			<span class="max-lg:hidden">&copy;2022 Das Grüne All rights reserved</span>
			<span class="cursor-not-allowed text-right">Privacy Policy</span>
		</div>
	</div>
</footer>