import ElDropdownItem from 'element-ui/packages/dropdown/src/dropdown-item';
import withStaticClass from '../../utils/withStaticClass';

const AtDropdownItem = {
	...ElDropdownItem,
	name: 'AtDropdownItem',
	render(...args) {
		const element = withStaticClass(this, ElDropdownItem, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtDropdownItem.install = function(Vue) {
	Vue.component(AtDropdownItem.name, AtDropdownItem);
};

export default AtDropdownItem;
