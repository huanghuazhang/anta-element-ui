import ElMenuItemGroup from 'element-ui/packages/menu/src/menu-item-group';
import withStaticClass from '../../utils/withStaticClass';

const AtMenuItemGroup = {
	...ElMenuItemGroup,
	name: 'AtMenuItemGroup',
	render(...args) {
		const element = withStaticClass(this, ElMenuItemGroup, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtMenuItemGroup.install = function(Vue) {
	Vue.component(AtMenuItemGroup.name, AtMenuItemGroup);
};

export default AtMenuItemGroup;
