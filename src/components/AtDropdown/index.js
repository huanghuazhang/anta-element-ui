import ElDropdown from 'element-ui/packages/dropdown/src/dropdown';
import withStaticClass from '../../utils/withStaticClass';
import ElButton from '../AtButton';

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
	components: {
		...ElDropdown.components,
		ElButton
	},
	render(...args) {
		const element = withStaticClass(this, ElDropdown, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtDropdown.install = function(Vue) {
	Vue.component(AtDropdown.name, AtDropdown);
};

export default AtDropdown;
