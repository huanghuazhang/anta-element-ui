import ElInputNumber from 'element-ui/packages/input-number/src/input-number';
import withStaticClass from '../../utils/withStaticClass';

const AtInputNumber = {
	...ElInputNumber,
	name: 'AtInputNumber',
	props: {
		...ElInputNumber.props,
		size: {
			type: String,
			default: 'small'
		},
		controlsPosition: {
			type: String,
			default: 'right'
		},
		block: {
			type: Boolean,
			default: false
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElInputNumber, ...args);

		element.data.class.push({
			'is-block': this.block
		});

		return element;
	}
};

/* istanbul ignore next */
AtInputNumber.install = function(Vue) {
	Vue.component(AtInputNumber.name, AtInputNumber);
};

export default AtInputNumber;
