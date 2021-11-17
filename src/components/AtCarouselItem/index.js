import ElCarouselItem from 'element-ui/packages/carousel/src/item';
import withStaticClass from '../../utils/withStaticClass';

const AtCarouselItem = {
	...ElCarouselItem,
	name: 'AtCarouselItem',
	render(...args) {
		const element = withStaticClass(this, ElCarouselItem, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtCarouselItem.install = function(Vue) {
	Vue.component(AtCarouselItem.name, AtCarouselItem);
};

export default AtCarouselItem;
