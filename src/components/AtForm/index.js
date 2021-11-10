import ElForm from 'element-ui/packages/form/src/form';
import withStaticClass from '../../utils/withStaticClass';

const AtForm = {
	...ElForm,
	name: 'AtForm',
	render(...args) {
		const element = withStaticClass(this, ElForm, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtForm.install = function(Vue) {
	Vue.component(AtForm.name, AtForm);
};

export default AtForm;
