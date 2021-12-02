import ElMenu from 'element-ui/packages/menu/src/menu';
import withStaticClass from '../../utils/withStaticClass';

const AtMenu = {
	...ElMenu,
	name: 'AtMenu',
	render(...args) {
		const element = withStaticClass(this, ElMenu, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtMenu.install = function(Vue) {
	Vue.component(AtMenu.name, AtMenu);
};

export default AtMenu;
