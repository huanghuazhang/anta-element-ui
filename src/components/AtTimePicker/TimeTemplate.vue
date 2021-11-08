<template>
	<transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
		<div v-show="visible" class="el-time-panel el-popper" :class="popperClass">
			<div
				class="el-time-panel__content"
				:class="{ 'has-seconds': showSeconds }"
			>
				<time-spinner
					ref="spinner"
					@change="handleChange"
					:arrow-control="useArrow"
					:show-seconds="showSeconds"
					:am-pm-mode="amPmMode"
					@select-range="setSelectionRange"
					:date="date"
				>
				</time-spinner>
			</div>
			<div class="el-time-panel__footer">
				<el-button type="text" size="small" @click="handleCancel">
					{{ t('el.datepicker.cancel') }}
				</el-button>
				<el-button
					type="primary"
					size="small"
					:disabled="disabled"
					@click="handleConfirm()"
				>
					{{ t('el.datepicker.confirm') }}
				</el-button>
			</div>
		</div>
	</transition>
</template>
