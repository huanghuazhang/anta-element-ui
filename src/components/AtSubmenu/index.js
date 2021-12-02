import ElSubMenu from 'element-ui/packages/menu/src/submenu';
import withStaticClass from '../../utils/withStaticClass';
import ElCollapseTransition from '../AtCollapseItem/transition';

const AtSubmenu = {
	...ElSubMenu,
	name: 'AtSubmenu',

	components: {
		...ElSubMenu.components,
		ElCollapseTransition
	},
	render(...args) {
		const element = withStaticClass(this, ElSubMenu, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtSubmenu.install = function(Vue) {
	Vue.component(AtSubmenu.name, AtSubmenu);
};

export default AtSubmenu;
