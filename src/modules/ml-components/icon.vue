<template>
	<span>
		<svg v-if="iconPath" class="svg-icon" xmlns="http://www.w3.org/2000/svg">
			<use :xlink:href="`#${iconPath}`"></use>
		</svg>
	</span>
</template>

<script>
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

const WARNING_MAP = {}

export default {
	name: 'Icon',
	props: ['name'],

	computed: {
		iconPath() {
			try {
				const icon = require(`@/assets/svg/svg-${this.name}.svg`)
				return icon.default ? icon.default.id : icon.id
			}
			catch (error) {
				if (!WARNING_MAP[error.message]) {
					WARNING_MAP[error.message] = true
					console.warn(error.message)
				}
			}

			return ''
		}
	}
}
</script>

<style>
	#__SVG_SPRITE_NODE__ {
		display: none;
	}

	.svg-icon {
		display: block;
		width: inherit;
		height: inherit;

		fill: inherit;
	}
</style>
