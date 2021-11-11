import ElSlider from 'element-ui/packages/slider/src/main';
import withStaticClass from '../../utils/withStaticClass';
import AtInputNumber from '../AtInputNumber';
import AtSliderTemplate from './AtSliderTemplate.vue';

const AtSlider = {
	...ElSlider,
	name: 'AtSlider',
	props: {
		...ElSlider.props
	},
	components: {
		...ElSlider.components,
		ElInputNumber: AtInputNumber
	},
	computed: {
		...ElSlider.computed,
		markList() {
			if (!this.marks) {
				return [];
			}

			const marksKeys = Object.keys(this.marks);
			return marksKeys
				.map(parseFloat)
				.sort((a, b) => a - b)
				.filter(point => point <= this.max && point >= this.min)
				.map(point => {
					let active = false;

					if (this.range) {
						active =
							point >=
								(100 * (this.minValue - this.min)) / (this.max - this.min) &&
							point <=
								(100 * (this.maxValue - this.min)) / (this.max - this.min);
					} else {
						active =
							point <=
							(100 * (this.firstValue - this.min)) / (this.max - this.min);
					}
					return {
						point,
						position: ((point - this.min) * 100) / (this.max - this.min),
						mark: this.marks[point],
						active
					};
				});
		},
		stops() {
			if (!this.showStops || this.min > this.max) return [];
			if (this.step === 0) {
				process.env.NODE_ENV !== 'production' &&
					console.warn('[Element Warn][Slider]step should not be 0.');
				return [];
			}
			const stopCount = (this.max - this.min) / this.step;
			const stepWidth = (100 * this.step) / (this.max - this.min);
			const result = [];
			for (let i = 0; i <= stopCount; i++) {
				result.push(i * stepWidth);
			}

			if (this.range) {
				return result.map(step => {
					return {
						step,
						active:
							step >=
								(100 * (this.minValue - this.min)) / (this.max - this.min) &&
							step <= (100 * (this.maxValue - this.min)) / (this.max - this.min)
					};
				});
			} else {
				return result.map(step => {
					return {
						step,
						active:
							step <=
							(100 * (this.firstValue - this.min)) / (this.max - this.min)
					};
				});
			}
		}
	},
	staticRenderFns: AtSliderTemplate.staticRenderFns,
	render(...args) {
		const element = withStaticClass(
			this,
			{
				...ElSlider,
				render: AtSliderTemplate.render
			},
			...args
		);

		element.data.class['disabled'] = this.disabled;

		return element;
	}
};

/* istanbul ignore next */
AtSlider.install = function(Vue) {
	Vue.component(AtSlider.name, AtSlider);
};

export default AtSlider;
