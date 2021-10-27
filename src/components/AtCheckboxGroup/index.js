import ElCheckboxGroup from 'element-ui/packages/checkbox/src/checkbox-group';
import withStaticClass from '../../utils/withStaticClass';

const AtCheckboxGroup = {
	...ElCheckboxGroup,
	name: 'AtCheckboxGroup',
	render(...args) {
		const element = withStaticClass(this, ElCheckboxGroup, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtCheckboxGroup.install = function(Vue) {
	Vue.component(AtCheckboxGroup.name, AtCheckboxGroup);
};

export default AtCheckboxGroup;
