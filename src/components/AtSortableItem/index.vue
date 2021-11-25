<template>
	<div
		class="at-sortable__item"
		:class="{
			'at-sortable__item--disabled': isDisabled,
			'at-sortable__item--move': isDefaultCursorMove
		}"
	>
		<slot></slot>
	</div>
</template>

<script>
import { addClass } from 'element-ui/src/utils/dom';
export default {
	name: 'AtSortableItem',
	props: {
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		isDisabled() {
			return this.disabled || this.$parent.disabled;
		},
		isDefaultCursorMove() {
			return this.$parent.handle === '.at-sortable__item' && !this.isDisabled;
		},
		handleClass() {
			return this.$parent.handle;
		}
	},
	methods: {
		setCustomCursorMove() {
			if (this.isDefaultCursorMove || this.isDisabled) {
				return;
			}

			const items = this.$el.querySelectorAll(this.handleClass) || [];

			items.forEach(item => addClass(item, 'at-sortable__item--move'));
		}
	},
	mounted() {
		this.setCustomCursorMove();
	},
	updated() {
		this.setCustomCursorMove();
	}
};
</script>
