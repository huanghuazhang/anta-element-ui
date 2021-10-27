import ElCheckbox from 'element-ui/packages/checkbox/src/checkbox';
import withStaticClass from '../../utils/withStaticClass';

const AtCheckbox = {
	...ElCheckbox,
	name: 'AtCheckbox',
	render(...args) {
		const element = withStaticClass(this, ElCheckbox, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtCheckbox.install = function(Vue) {
	Vue.component(AtCheckbox.name, AtCheckbox);
};

export default AtCheckbox;
