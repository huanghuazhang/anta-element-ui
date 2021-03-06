import ElDropdownMenu from 'element-ui/packages/dropdown/src/dropdown-menu';
import withStaticClass from '../../utils/withStaticClass';

const AtDropdownMenu = {
	...ElDropdownMenu,
	name: 'AtDropdownMenu',
	props: {
		...ElDropdownMenu.props,
		visibleArrow: {
			type: Boolean,
			default: false
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElDropdownMenu, ...args);

		if (!element.data.style) {
			element.data.style = {};
		}
		element.data.style.minWidth = `${this.referenceElm?.offsetWidth ?? 0}px`;

		element.data.staticClass = 'at-dropdown-menu';

		return element;
	}
};

/* istanbul ignore next */
AtDropdownMenu.install = function(Vue) {
	Vue.component(AtDropdownMenu.name, AtDropdownMenu);
};

export default AtDropdownMenu;
