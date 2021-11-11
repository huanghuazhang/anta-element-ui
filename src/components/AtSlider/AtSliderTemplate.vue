<template>
	<div
		class="el-slider"
		:class="{ 'is-vertical': vertical, 'el-slider--with-input': showInput }"
		role="slider"
		:aria-valuemin="min"
		:aria-valuemax="max"
		:aria-orientation="vertical ? 'vertical' : 'horizontal'"
		:aria-disabled="sliderDisabled"
	>
		<el-input-number
			v-model="firstValue"
			v-if="showInput && !range"
			class="el-slider__input"
			ref="input"
			@change="emitChange"
			:step="step"
			:disabled="sliderDisabled"
			:controls="showInputControls"
			:min="min"
			:max="max"
			:debounce="debounce"
			:size="inputSize"
		>
		</el-input-number>
		<div
			class="el-slider__runway"
			:class="{ 'show-input': showInput, disabled: sliderDisabled }"
			:style="runwayStyle"
			@click="onSliderClick"
			ref="slider"
		>
			<div class="el-slider__bar" :style="barStyle"></div>
			<slider-button
				:vertical="vertical"
				v-model="firstValue"
				:tooltip-class="tooltipClass"
				ref="button1"
			>
			</slider-button>
			<slider-button
				:vertical="vertical"
				v-model="secondValue"
				:tooltip-class="tooltipClass"
				ref="button2"
				v-if="range"
			>
			</slider-button>
			<div
				class="el-slider__stop"
				v-for="(item, key) in stops"
				:key="key"
				:style="getStopStyle(item.step)"
				:class="{ 'el-slider__stop--active': item.active }"
				v-show="showStops"
			></div>
			<template v-if="markList.length > 0">
				<div>
					<div
						v-for="(item, key) in markList"
						:style="getStopStyle(item.position)"
						class="el-slider__stop el-slider__marks-stop"
						:class="{ 'el-slider__stop--active': item.active }"
						:key="key"
					></div>
				</div>
				<div class="el-slider__marks">
					<slider-marker
						:mark="item.mark"
						v-for="(item, key) in markList"
						:key="key"
						:style="getStopStyle(item.position)"
					>
					</slider-marker>
				</div>
			</template>
		</div>
	</div>
</template>
