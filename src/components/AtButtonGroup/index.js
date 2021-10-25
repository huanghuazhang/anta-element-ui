import ElButtonGroup from 'element-ui/packages/button/src/button-group';
import withStaticClass from '../../utils/withStaticClass';

const AtButtonGroup = {
	...ElButtonGroup,
	name: 'AtButtonGroup',
	render(...args) {
		const element = withStaticClass(this, ElButtonGroup, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtButtonGroup.install = function(Vue) {
	Vue.component(AtButtonGroup.name, AtButtonGroup);
};

export default AtButtonGroup;
