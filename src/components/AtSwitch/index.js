import ElSwitch from 'element-ui/packages/switch/src/component';
import withStaticClass from '../../utils/withStaticClass';

const AtSwitch = {
	...ElSwitch,
	name: 'AtSwitch',
	props: {
		...ElSwitch.props,
		size: {
			type: String,
			default: 'normal'
		},
		width: {
			type: Number,
			default: NaN
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElSwitch, ...args);

		element.data.class['at-switch--small'] = this.size === 'small';

		return element;
	},
	mounted() {
		if (this.activeColor || this.inactiveColor) {
			this.setBackgroundColor();
		}
		this.$refs.input.checked = this.checked;
	}
};

/* istanbul ignore next */
AtSwitch.install = function(Vue) {
	Vue.component(AtSwitch.name, AtSwitch);
};

export default AtSwitch;
