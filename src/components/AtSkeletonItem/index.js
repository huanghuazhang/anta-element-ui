import ElSkeletonItem from 'element-ui/packages/skeleton/src/item';
import withStaticClass from '../../utils/withStaticClass';

const AtSkeletonItem = {
	...ElSkeletonItem,
	name: 'AtSkeletonItem',
	render(...args) {
		const element = withStaticClass(this, ElSkeletonItem, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtSkeletonItem.install = function(Vue) {
	Vue.component(AtSkeletonItem.name, AtSkeletonItem);
};

export default AtSkeletonItem;
