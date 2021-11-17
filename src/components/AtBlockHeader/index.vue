<template>
	<div class="at-block-header" :class="['at-block-header--' + type]">
		<div class="at-block-header__title">
			<slot></slot>
		</div>
		<div class="at-block-header__right" v-if="$slots.right || right">
			<slot name="right">{{ right }}</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AtBlockHeader',
	props: {
		right: {
			type: String
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
