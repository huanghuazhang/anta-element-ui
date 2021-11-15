import ElInput from 'element-ui/packages/input/src/input';
import withStaticClass from '../../utils/withStaticClass';

const AtInput = {
	...ElInput,
	name: 'AtInput',
	props: {
		...ElInput.props,
		size: {
			type: String,
			default: 'small'
		},
		block: {
			type: Boolean,
			default: false
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElInput, ...args);

		element.data.class.push({
			'is-block': this.block
		});

		return element;
	}
};

/* istanbul ignore next */
AtInput.install = function(Vue) {
	Vue.component(AtInput.name, AtInput);
};

export default AtInput;
