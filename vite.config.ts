import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { imagetools, lqip } from '@zerodevx/svelte-img/vite'
import {
	resize,
	format,
	setMetadata,
	getMetadata,
	metadataFormat,
	resolveConfigs
} from 'imagetools-core'

function lqip(cfg, ctx) {
	if (!cfg.lqip) return

	const r = resize({ width: cfg.lqip }, ctx)
	const f = format({ format: 'webp', quality: '20' }, ctx)
	return async function (image) {
		const img = f(r(image))
		const buffer = await img.toBuffer()
		setMetadata(img, 'base64', `data:image/webp;base64,${buffer.toString('base64')}`)
		const raw = await img.raw().toBuffer()
		const pixels = []
		const width = getMetadata(img, 'width')
		const height = getMetadata(img, 'height')
		for (let i = 0; i < width * height * 3; i += 3) {
			pixels.push([raw[i], raw[i + 1], raw[i + 2]])
		}
		setMetadata(img, 'pixels', pixels)
		return img
	}
}

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools({
			extendTransforms: (builtins) => [...builtins, lqip],
			extendOutputFormats: (builtinOutputFormats) => ({
				...builtinOutputFormats,
				run: () => metadataFormat(['format', 'src', 'width', 'height', 'base64', 'pixels'])
			}),
			resolveConfigs: (e, f) => {
				if (e.findIndex((i) => i[0] === 'run') > -1) {
					const idx = e.findIndex((i) => i[0] === 'lqip')
					const lqip = idx > -1 ? parseInt(e.splice(idx, 1)[0][1][0]) : 12
					const merge = new Map()
					for (const [key, val] of e) merge.set(key, val)
					return [...resolveConfigs([...merge], f), ...(lqip ? [{ lqip }] : [])]
				}
				return resolveConfigs(e, f)
			}
		})
	]
})
