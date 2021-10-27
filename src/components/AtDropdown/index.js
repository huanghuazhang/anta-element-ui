import ElDropdown from 'element-ui/packages/dropdown/src/dropdown';
import withStaticClass from '../../utils/withStaticClass';

const AtDropdown = {
	...ElDropdown,
	name: 'AtDropdown',
	props: {
		...ElDropdown.props,
		placement: {
			type: String,
			default: 'bottom-start'
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElDropdown, ...args);

		if (element?.children[1]) {
			if (!element?.children[1]?.data?.class) {
				element.children[1].data.class = [];
			}
			element?.children[1]?.data?.class?.push('at-popper');
		}

		return element;
	}
};

/* istanbul ignore next */
AtDropdown.install = function(Vue) {
	Vue.component(AtDropdown.name, AtDropdown);
};

export default AtDropdown;
