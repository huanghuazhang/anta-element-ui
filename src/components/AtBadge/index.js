import ElBadge from 'element-ui/packages/badge/src/main';
import withStaticClass from '../../utils/withStaticClass';

const AtBadge = {
	...ElBadge,
	name: 'AtBadge',
	render(...args) {
		const element = withStaticClass(this, ElBadge, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtBadge.install = function(Vue) {
	Vue.component(AtBadge.name, AtBadge);
};

export default AtBadge;
