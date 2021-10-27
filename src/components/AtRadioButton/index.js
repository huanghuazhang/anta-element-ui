import ElRadioButton from 'element-ui/packages/radio/src/radio-button';
import withStaticClass from '../../utils/withStaticClass';

const AtRadioButton = {
	...ElRadioButton,
	name: 'AtRadioButton',
	render(...args) {
		const element = withStaticClass(this, ElRadioButton, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtRadioButton.install = function(Vue) {
	Vue.component(AtRadioButton.name, AtRadioButton);
};

export default AtRadioButton;
