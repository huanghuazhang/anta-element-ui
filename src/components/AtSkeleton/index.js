import ElSkeleton from 'element-ui/packages/skeleton/src/index';
import withStaticClass from '../../utils/withStaticClass';

const AtSkeleton = {
	...ElSkeleton,
	name: 'AtSkeleton',
	render(...args) {
		const element = withStaticClass(this, ElSkeleton, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtSkeleton.install = function(Vue) {
	Vue.component(AtSkeleton.name, AtSkeleton);
};

export default AtSkeleton;
