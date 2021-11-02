import ElButton from 'element-ui/packages/button/src/button';
import withStaticClass from '../../utils/withStaticClass';

const AtButton = {
	...ElButton,
	name: 'AtButton',
	props: {
		...ElButton.props,
		size: {
			type: String,
			default: 'small'
		},
		square: {
			type: Boolean,
			default: false
		},
		block: {
			type: Boolean,
			default: false
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElButton, ...args);

		element.data.class.push({
			'is-square': this.square
		});
		element.data.class.push({
			'is-block': this.block
		});

		return element;
	}
};

/* istanbul ignore next */
AtButton.install = function(Vue) {
	Vue.component(AtButton.name, AtButton);
};

export default AtButton;
