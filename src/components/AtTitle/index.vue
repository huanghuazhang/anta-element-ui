<template>
	<div
		class="at-title"
		:class="[
			'at-title--' + type,
			type === 'module' || prefix ? 'at-title--prefix' : ''
		]"
		:style="{
			borderBottomWidth: border ? undefined : '0px'
		}"
	>
		<div class="at-title__title">
			<slot></slot>
		</div>
		<div class="at-title__right" v-if="$slots.right || right">
			<slot name="right">{{ right }}</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AtTitle',
	props: {
		right: {
			type: String
		},
		border: {
			type: Boolean,
			default: true
		},
		prefix: {
			type: Boolean,
			default: false
		},
		/**
		 * default
		 * module
		 */
		type: {
			type: String,
			default: 'default'
		}
	}
};
</script>
