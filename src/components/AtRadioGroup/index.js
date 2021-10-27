import ElRadioGroup from 'element-ui/packages/radio/src/radio-group';
import withStaticClass from '../../utils/withStaticClass';

const AtRadioGroup = {
	...ElRadioGroup,
	name: 'AtRadioGroup',
	render(...args) {
		const element = withStaticClass(this, ElRadioGroup, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtRadioGroup.install = function(Vue) {
	Vue.component(AtRadioGroup.name, AtRadioGroup);
};

export default AtRadioGroup;
