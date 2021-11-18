import ElTooltip from 'element-ui/packages/tooltip/src/main';
import withStaticClass from '../../utils/withStaticClass';

const AtTooltip = {
	...ElTooltip,
	name: 'AtTooltip',
	props: {
		...ElTooltip.props,
		popperClass: {
			type: String,
			default: 'at-tooltip__popper'
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElTooltip, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtTooltip.install = function(Vue) {
	Vue.component(AtTooltip.name, AtTooltip);
};

export default AtTooltip;
