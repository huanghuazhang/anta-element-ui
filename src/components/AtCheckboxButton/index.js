import ElCheckboxButton from 'element-ui/packages/checkbox/src/checkbox-button';
import withStaticClass from '../../utils/withStaticClass';

const AtCheckboxButton = {
	...ElCheckboxButton,
	name: 'AtCheckboxButton',
	render(...args) {
		const element = withStaticClass(this, ElCheckboxButton, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtCheckboxButton.install = function(Vue) {
	Vue.component(AtCheckboxButton.name, AtCheckboxButton);
};

export default AtCheckboxButton;
