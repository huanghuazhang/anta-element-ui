import ElCarousel from 'element-ui/packages/carousel/src/main';
import withStaticClass from '../../utils/withStaticClass';

const AtCarousel = {
	...ElCarousel,
	name: 'AtCarousel',
	methods: {
		...ElCarousel.methods,

		updateItems() {
			this.items = this.$children.filter(
				child => child.$options.name === 'AtCarouselItem'
			);
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElCarousel, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtCarousel.install = function(Vue) {
	Vue.component(AtCarousel.name, AtCarousel);
};

export default AtCarousel;
