import ElButton from 'element-ui/packages/button/src/button';
import withStaticClass from '../../utils/withStaticClass';

const AtButton = {
	name: 'AtButton',
	props: {
		square: {
			type: Boolean,
			default: false
		}
	},
	extends: ElButton,
	render(...args) {
		const element = withStaticClass(this, ElButton, ...args);

		element.data.class.push({
			'is-square': this.square
		});

		return element;
	}
};

/* istanbul ignore next */
AtButton.install = function(Vue) {
	Vue.component(AtButton.name, AtButton);
};

export default AtButton;
