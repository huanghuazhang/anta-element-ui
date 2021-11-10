import ElFormItem from 'element-ui/packages/form/src/form-item';
import withStaticClass from '../../utils/withStaticClass';

const AtFormItem = {
	...ElFormItem,
	name: 'AtFormItem',
	render(...args) {
		const element = withStaticClass(this, ElFormItem, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtFormItem.install = function(Vue) {
	Vue.component(AtFormItem.name, AtFormItem);
};

export default AtFormItem;
