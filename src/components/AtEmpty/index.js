import ElEmpty from 'element-ui/packages/empty/src/index';
import withStaticClass from '../../utils/withStaticClass';

const AtEmpty = {
	...ElEmpty,
	name: 'AtEmpty',
	render(...args) {
		const element = withStaticClass(this, ElEmpty, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtEmpty.install = function(Vue) {
	Vue.component(AtEmpty.name, AtEmpty);
};

export default AtEmpty;
