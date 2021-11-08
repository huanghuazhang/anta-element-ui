<template>
	<transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
		<div
			v-show="visible"
			class="el-time-range-picker el-picker-panel el-popper"
			:class="popperClass"
		>
			<div class="el-time-range-picker__content">
				<div class="el-time-range-picker__cell">
					<div class="el-time-range-picker__header">
						{{ t('el.datepicker.startTime') }}
					</div>
					<div
						:class="{ 'has-seconds': showSeconds, 'is-arrow': arrowControl }"
						class="el-time-range-picker__body el-time-panel__content"
					>
						<time-spinner
							ref="minSpinner"
							:show-seconds="showSeconds"
							:am-pm-mode="amPmMode"
							@change="handleMinChange"
							:arrow-control="arrowControl"
							@select-range="setMinSelectionRange"
							:date="minDate"
						>
						</time-spinner>
					</div>
				</div>
				<div class="el-time-range-picker__cell">
					<div class="el-time-range-picker__header">
						{{ t('el.datepicker.endTime') }}
					</div>
					<div
						:class="{ 'has-seconds': showSeconds, 'is-arrow': arrowControl }"
						class="el-time-range-picker__body el-time-panel__content"
					>
						<time-spinner
							ref="maxSpinner"
							:show-seconds="showSeconds"
							:am-pm-mode="amPmMode"
							@change="handleMaxChange"
							:arrow-control="arrowControl"
							@select-range="setMaxSelectionRange"
							:date="maxDate"
						>
						</time-spinner>
					</div>
				</div>
			</div>
			<div class="el-time-panel__footer">
				<el-button type="text" @click="handleCancel()">
					{{ t('el.datepicker.cancel') }}
				</el-button>
				<el-button
					type="primary"
					@click="handleConfirm()"
					:disabled="btnDisabled"
				>
					{{ t('el.datepicker.confirm') }}
				</el-button>
			</div>
		</div>
	</transition>
</template>
