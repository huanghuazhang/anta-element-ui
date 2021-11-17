<template>
	<div
		class="el-card at-card"
		:class="[
			shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow',
			'at-card--' + size
		]"
	>
		<div class="el-card__header" v-if="$slots.header || header">
			<div class="el-card__header__title">
				<slot name="header">{{ header }}</slot>
			</div>
			<div class="el-card__header__right">
				<slot name="right">{{ right }}</slot>
			</div>
		</div>
		<div class="el-card__body" :style="bodyStyle">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AtCard',
	props: {
		header: {},
		right: {},
		bodyStyle: {},
		/**
		 * large
		 * medium
		 * small
		 * mini
		 */
		size: {
			type: String,
			default: 'medium'
		},
		shadow: {
			type: String,
			default: 'never'
		}
	}
};
</script>
