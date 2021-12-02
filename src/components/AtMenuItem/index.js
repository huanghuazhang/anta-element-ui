import ElMenuItem from 'element-ui/packages/menu/src/menu-item';
import withStaticClass from '../../utils/withStaticClass';

const AtMenuItem = {
	...ElMenuItem,
	name: 'AtMenuItem',
	render(...args) {
		const element = withStaticClass(this, ElMenuItem, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtMenuItem.install = function(Vue) {
	Vue.component(AtMenuItem.name, AtMenuItem);
};

export default AtMenuItem;
