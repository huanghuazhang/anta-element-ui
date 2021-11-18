import ElCollapse from 'element-ui/packages/collapse/src/collapse';
import withStaticClass from '../../utils/withStaticClass';

const AtCollapse = {
	...ElCollapse,
	name: 'AtCollapse',
	props: {
		...ElCollapse.props,
		border: {
			type: Boolean,
			default: false
		},
		background: {
			type: Boolean,
			default: true
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElCollapse, ...args);

		if (!element.data.class) {
			element.data.class = [];
		}

		element.data.class.push({
			'has-border': this.border,
			'has-background': this.background
		});

		return element;
	}
};

/* istanbul ignore next */
AtCollapse.install = function(Vue) {
	Vue.component(AtCollapse.name, AtCollapse);
};

export default AtCollapse;
