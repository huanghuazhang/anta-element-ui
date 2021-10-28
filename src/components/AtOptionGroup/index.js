import ElOptionGroup from 'element-ui/packages/select/src/option-group';
import withStaticClass from '../../utils/withStaticClass';

const AtOptionGroup = {
	...ElOptionGroup,
	name: 'AtOptionGroup',
	render(...args) {
		const element = withStaticClass(this, ElOptionGroup, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtOptionGroup.install = function(Vue) {
	Vue.component(AtOptionGroup.name, AtOptionGroup);
};

export default AtOptionGroup;
