<template>
	<transition name="el-alert-fade">
		<div
			class="el-alert"
			:class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
			v-show="visible"
			role="alert"
		>
			<i
				class="el-alert__icon"
				:class="[iconClass, isBigIcon]"
				v-if="showIcon"
			></i>
			<div class="el-alert__content">
				<span
					class="el-alert__title"
					:class="[isBoldTitle]"
					v-if="title || $slots.title"
				>
					<slot name="title">{{ title }}</slot>
				</span>
				<p class="el-alert__description" v-if="$slots.default && !description">
					<slot></slot>
				</p>
				<p class="el-alert__description" v-if="description && !$slots.default">
					{{ description }}
				</p>
				<i
					class="el-alert__closebtn"
					:class="{
						'is-customed': closeText !== '',
						'at-icon-close': closeText === ''
					}"
					v-show="closable"
					@click="close()"
					>{{ closeText }}</i
				>
			</div>
		</div>
	</transition>
</template>
