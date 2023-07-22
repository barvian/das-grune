import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import clipPathPlugin from 'tailwind-clip-path'
import imageRenderingPlugin from 'tailwindcss-image-rendering'
import containerQueryPlugin from '@tailwindcss/container-queries'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			borderWidth: {
				DEFAULT: '1.5px'
			},
			borderColor: {
				DEFAULT: 'currentColor'
			},
			screens: {
				xs: '480px'
			},
			fontFamily: {
				sans: ['Clash Display', 'sans-serif']
			},
			backgroundImage: {
				'discuss': `url("data:image/svg+xml,%3Csvg viewBox='0 0 816 45' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.1705 42H0V2.13504H20.1705C33.32 2.13504 41.65 9.45354 41.65 22.0675C41.65 34.6815 33.32 42 20.1705 42ZM20.1705 12.1905H11.186V31.9445H20.1705C27.251 31.9445 29.6905 31.052 29.6905 22.0675C29.6905 13.083 27.251 12.1905 20.1705 12.1905Z' fill='%23D5FF3F'/%3E%3Cpath d='M55.7957 42H44.6097V2.13504H55.7957V42Z' fill='%23D5FF3F'/%3E%3Cpath d='M78.7059 42.595C66.5084 42.595 59.0709 38.2515 59.0709 28.1365V27.7795H70.257V29.029C70.257 31.7065 71.2089 32.4205 78.7059 32.4205C85.4889 32.4205 86.2029 31.885 86.2029 30.1C86.2029 28.672 85.4295 28.077 82.157 27.6605L69.6619 25.9945C62.2244 24.983 58.476 20.9965 58.476 14.5705C58.476 8.20404 63.4145 1.54004 77.8135 1.54004C90.487 1.54004 96.556 7.07354 96.556 15.9985V16.3555H85.3699V15.463C85.3699 12.607 84.1205 11.655 76.6235 11.655C70.9115 11.655 69.6619 12.4285 69.6619 14.154C69.6619 15.4035 70.376 15.9985 72.518 16.296L85.013 18.1405C94.771 19.5685 97.389 24.5665 97.389 29.6835C97.389 36.526 92.1529 42.595 78.7059 42.595Z' fill='%23D5FF3F'/%3E%3Cpath d='M121.462 42.595C107.599 42.595 99.4473 34.503 99.4473 22.0675C99.4473 9.63204 107.599 1.54004 121.462 1.54004C134.85 1.54004 142.882 7.90654 142.882 18.557V19.5685H130.387V18.557C130.387 14.035 128.245 12.25 121.641 12.25C113.549 12.25 111.347 14.154 111.347 22.0675C111.347 29.981 113.549 31.885 121.641 31.885C128.245 31.885 130.387 30.1 130.387 25.578V24.5665H142.882V25.578C142.882 36.2285 134.85 42.595 121.462 42.595Z' fill='%23D5FF3F'/%3E%3Cpath d='M165.94 42.595C152.017 42.595 145.591 35.8715 145.591 25.2805V2.13504H156.777V24.388C156.777 30.0405 158.384 31.766 165.94 31.766C173.497 31.766 175.103 30.0405 175.103 24.388V2.13504H186.289V25.2805C186.289 35.8715 179.863 42.595 165.94 42.595Z' fill='%23D5FF3F'/%3E%3Cpath d='M208.978 42.595C196.781 42.595 189.343 38.2515 189.343 28.1365V27.7795H200.529V29.029C200.529 31.7065 201.481 32.4205 208.978 32.4205C215.761 32.4205 216.475 31.885 216.475 30.1C216.475 28.672 215.702 28.077 212.429 27.6605L199.934 25.9945C192.497 24.983 188.748 20.9965 188.748 14.5705C188.748 8.20404 193.687 1.54004 208.086 1.54004C220.759 1.54004 226.828 7.07354 226.828 15.9985V16.3555H215.642V15.463C215.642 12.607 214.393 11.655 206.896 11.655C201.184 11.655 199.934 12.4285 199.934 14.154C199.934 15.4035 200.648 15.9985 202.79 16.296L215.285 18.1405C225.043 19.5685 227.661 24.5665 227.661 29.6835C227.661 36.526 222.425 42.595 208.978 42.595Z' fill='%23D5FF3F'/%3E%3Cpath d='M249.652 42.595C237.455 42.595 230.017 38.2515 230.017 28.1365V27.7795H241.203V29.029C241.203 31.7065 242.155 32.4205 249.652 32.4205C256.435 32.4205 257.149 31.885 257.149 30.1C257.149 28.672 256.376 28.077 253.103 27.6605L240.608 25.9945C233.171 24.983 229.422 20.9965 229.422 14.5705C229.422 8.20404 234.361 1.54004 248.76 1.54004C261.433 1.54004 267.502 7.07354 267.502 15.9985V16.3555H256.316V15.463C256.316 12.607 255.067 11.655 247.57 11.655C241.858 11.655 240.608 12.4285 240.608 14.154C240.608 15.4035 241.322 15.9985 243.464 16.296L255.959 18.1405C265.717 19.5685 268.335 24.5665 268.335 29.6835C268.335 36.526 263.099 42.595 249.652 42.595Z' fill='%23D5FF3F'/%3E%3Cpath d='M305.716 42H294.53V29.3265L276.62 2.13504H290.484L296.493 11.5955L299.885 17.1885H300.658L304.05 11.5955L310.059 2.13504H323.982L305.716 29.386V42Z' fill='%23D5FF3F'/%3E%3Cpath d='M346.332 42.595C332.468 42.595 324.257 34.503 324.257 22.0675C324.257 9.63204 332.468 1.54004 346.332 1.54004C360.552 1.54004 368.644 9.63204 368.644 22.0675C368.644 34.503 360.552 42.595 346.332 42.595ZM346.332 31.885C354.424 31.885 356.744 29.981 356.744 22.0675C356.744 14.154 354.424 12.25 346.332 12.25C338.24 12.25 336.157 14.154 336.157 22.0675C336.157 29.981 338.24 31.885 346.332 31.885Z' fill='%23D5FF3F'/%3E%3Cpath d='M391.738 42.595C377.815 42.595 371.389 35.8715 371.389 25.2805V2.13504H382.575V24.388C382.575 30.0405 384.182 31.766 391.738 31.766C399.295 31.766 400.901 30.0405 400.901 24.388V2.13504H412.087V25.2805C412.087 35.8715 405.661 42.595 391.738 42.595Z' fill='%23D5FF3F'/%3E%3Cpath d='M426.625 42H415.439V2.13504H438.703C449.235 2.13504 454.768 6.53804 454.768 14.3325C454.768 20.6395 451.615 24.388 443.999 25.34V25.935C448.104 27.006 449.413 28.9695 450.901 32.004L455.839 42H442.928L438.168 32.242C436.74 29.267 435.55 28.434 431.206 28.434H426.625V42ZM426.625 12.1905V20.104H438.584C441.857 20.104 443.047 19.509 443.047 16.1175C443.047 12.964 441.857 12.1905 438.584 12.1905H426.625Z' fill='%23D5FF3F'/%3E%3Cpath d='M477.118 42H465.932V2.13504H477.118V42Z' fill='%23D5FF3F'/%3E%3Cpath d='M501.516 42H481.346V2.13504H501.516C514.666 2.13504 522.996 9.45354 522.996 22.0675C522.996 34.6815 514.666 42 501.516 42ZM501.516 12.1905H492.532V31.9445H501.516C508.597 31.9445 511.036 31.052 511.036 22.0675C511.036 13.083 508.597 12.1905 501.516 12.1905Z' fill='%23D5FF3F'/%3E%3Cpath d='M561.358 42H525.955V2.13504H561.358V12.1905H537.141V16.9505H560.465V26.9465H537.141V31.9445H561.358V42Z' fill='%23D5FF3F'/%3E%3Cpath d='M574.712 42H562.157L579.353 2.13504H595.358L612.613 42H599.761L596.727 34.622H577.806L574.712 42ZM584.351 18.9735L582.03 24.5665H592.621L590.301 18.9735L587.683 12.25H586.909L584.351 18.9735Z' fill='%23D5FF3F'/%3E%3Cpath d='M633.148 42.595C620.951 42.595 613.513 38.2515 613.513 28.1365V27.7795H624.699V29.029C624.699 31.7065 625.651 32.4205 633.148 32.4205C639.931 32.4205 640.645 31.885 640.645 30.1C640.645 28.672 639.872 28.077 636.599 27.6605L624.104 25.9945C616.667 24.983 612.918 20.9965 612.918 14.5705C612.918 8.20404 617.857 1.54004 632.256 1.54004C644.929 1.54004 650.998 7.07354 650.998 15.9985V16.3555H639.812V15.463C639.812 12.607 638.563 11.655 631.066 11.655C625.354 11.655 624.104 12.4285 624.104 14.154C624.104 15.4035 624.818 15.9985 626.96 16.296L639.455 18.1405C649.213 19.5685 651.831 24.5665 651.831 29.6835C651.831 36.526 646.595 42.595 633.148 42.595Z' fill='%23D5FF3F'/%3E%3Cpath d='M734.716 0C731.441 16.5003 728.786 18.9629 711 22.0003C728.787 25.0371 731.441 27.5004 734.716 44C737.99 27.4998 740.645 25.0371 758.431 22.0003C740.645 18.9629 737.991 16.5003 734.716 0Z' fill='%23D5FF3F'/%3E%3C/svg%3E%0A")`
			},
			colors: {
				neutral: {
					900: '#151515'
				}
			},
			letterSpacing: {
				tighter: '-.04em'
			},
			lineHeight: {
				relaxed: '1.62',
				loose: '1.955'
			},
			dropShadow: {
				trail: [
					'0 0 1.875rem rgba(255, 255, 255, 0.58)',
					'0 -2.1875rem 2.5625rem rgba(255, 255, 255, 0.41)',
					'0 -5.6875rem 4.375rem rgba(255, 255, 255, 0.51)',
					'0 -10.25rem 5.6875rem rgba(255, 255, 255, 0.31)'
				]
			},
			animation: {
				blink: 'blink 1s step-end infinite',
				flicker: 'flicker 1s linear 1',
				'float-1': 'float-2 8s ease-in-out 0.5s infinite normal',
				'float-2': 'float-2 8s ease-in-out 0.3s infinite normal',
				'float-3': 'float-3 9s ease-in-out 0.2s infinite normal',
				'float-4': 'float-4 9s ease-in-out 0.7s infinite normal'
			},
			keyframes: {
				'float-1': {
					'0%, 100%': {
						transform: 'translateX(0)'
					},
					'50%': {
						transform: 'translateX(-0.25rem)'
					}
				},
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
			}
		}
	},
	plugins: [
		clipPathPlugin,
		imageRenderingPlugin(),
		containerQueryPlugin,
		plugin(({ addVariant }) => {
			addVariant('js', '[data-js]:root &')
			addVariant('fonts-loaded', ['[data-no-js]:root &', '[data-js][data-fonts-loaded]:root &'])
			addVariant('entered', ['[data-no-js]:root &', '&[data-observe-entered]', '[data-observe-entered] &'])
			addVariant('entering', ['[data-no-js]:root &', '&[data-observe-entering]', '[data-observe-entering] &'])
		})
	]
} satisfies Config
