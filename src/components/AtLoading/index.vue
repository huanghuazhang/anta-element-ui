<template>
	<transition
		name="el-loading-fade at-loading-fade"
		@after-leave="handleAfterLeave"
	>
		<div>
			<slot></slot>
			<div
				v-show="visible"
				class="el-loading-mask at-loading-mask"
				:style="{ backgroundColor: background || '' }"
				:class="[
					customClass,
					{
						'is-static': isStatic
					},
					{ 'is-fullscreen': fullscreen }
				]"
			>
				<div class="el-loading-spinner at-loading-spinner" :class="[direction]">
					<svg
						v-if="!spinner"
						class="circular"
						viewBox="25 25 50 50"
						:style="{ width: size, height: size }"
					>
						<circle class="path-bg" cx="50" cy="50" r="20" fill="none" />
						<circle class="path" cx="50" cy="50" r="20" fill="none" />
					</svg>
					<i v-else :class="spinner"></i>
					<p v-if="text" class="el-loading-text at-loading-text">{{ text }}</p>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'AtLoading',
	props: {
		static: {
			type: Boolean,
			default: false
		},
		direction: {
			type: String,
			default: 'vertical' //'vertical' | 'horizontal';
		},
		text: {
			type: String,
			default: ''
		},
		size: {
			type: Number,
			default: 50
		},
		spinner: {
			type: String,
			default: ''
		},
		background: {
			type: String,
			default: ''
		},
		fullscreen: {
			type: Boolean,
			default: false
		},
		visible: {
			type: Boolean,
			default: false
		},
		customClass: {
			type: String,
			default: ''
		}
	},
	computed: {
		isStatic() {
			return this.static;
		}
	},

	methods: {
		handleAfterLeave() {
			this.$emit('after-leave');
		}
	}
};
</script>
