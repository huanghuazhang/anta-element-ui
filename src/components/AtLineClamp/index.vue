<template>
	<div>
		<div v-if="!popover" class="at-line-clamp" :style="{ lineClamp: line }">
			<slot></slot>
		</div>
		<at-popover v-else :content="content" :width="popoverWidth">
			<div slot="reference" class="at-line-clamp" :style="{ lineClamp: line }">
				<slot></slot>
			</div>
		</at-popover>
	</div>
</template>

<script>
export default {
	name: 'AtLineClamp',
	props: {
		line: {
			type: Number,
			default: 1
		},
		popover: {
			type: Boolean,
			default: true
		},
		popoverWidth: {
			type: Number,
			default: 300
		}
	},
	computed: {
		content() {
			const items = [].concat(this.$slots.default).map(item => item.text);

			return items.join('\n');
		}
	}
};
</script>
