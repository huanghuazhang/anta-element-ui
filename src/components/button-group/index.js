import ElButtonGroup from 'element-ui/packages/button/src/button-group';
import withStaticClass from '../../utils/withStaticClass';

const AtButtonGroup = {
	name: 'AtButtonGroup',
	extends: ElButtonGroup,
	render(...args) {
		return withStaticClass(this, ElButtonGroup, ...args);
	}
};

/* istanbul ignore next */
AtButtonGroup.install = function(Vue) {
	Vue.component(AtButtonGroup.name, AtButtonGroup);
};

export default AtButtonGroup;
