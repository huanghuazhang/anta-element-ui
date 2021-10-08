import ElButton from 'element-ui/packages/button/src/button';
import withStaticClass from '../../utils/withStaticClass';

const AtButton = {
	name: 'AtButton',
	extends: ElButton,
	render(...args) {
		return withStaticClass(this, ElButton, ...args);
	}
};

/* istanbul ignore next */
AtButton.install = function(Vue) {
	Vue.component(AtButton.name, AtButton);
};

export default AtButton;
