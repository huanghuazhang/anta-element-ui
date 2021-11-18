<template>
	<li :class="['el-timeline-item', `at-timeline-item--${placement}`]">
		<div class="el-timeline-item__tail"></div>

		<div
			v-if="!$slots.dot"
			class="el-timeline-item__node"
			:class="[
				`el-timeline-item__node--${size || ''}`,
				`el-timeline-item__node--${type || ''}`
			]"
			:style="{
				backgroundColor: color
			}"
		>
			<i v-if="icon" class="el-timeline-item__icon" :class="icon"></i>
		</div>
		<div v-if="$slots.dot" class="el-timeline-item__dot">
			<slot name="dot"></slot>
		</div>

		<div class="el-timeline-item__wrapper">
			<div
				v-if="!hideTimestamp && (placement === 'top' || placement === 'left')"
				class="el-timeline-item__timestamp is-top"
			>
				{{ timestamp }}
			</div>

			<div class="el-timeline-item__content">
				<slot></slot>
			</div>

			<div
				v-if="
					!hideTimestamp && (placement === 'bottom' || placement === 'right')
				"
				class="el-timeline-item__timestamp is-bottom"
			>
				{{ timestamp }}
			</div>
		</div>
	</li>
</template>
