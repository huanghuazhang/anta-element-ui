import ElInput from 'element-ui/packages/input/src/input';
import withStaticClass from '../../utils/withStaticClass';

const AtInput = {
	...ElInput,
	name: 'AtInput',
	render(...args) {
		const element = withStaticClass(this, ElInput, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtInput.install = function(Vue) {
	Vue.component(AtInput.name, AtInput);
};

export default AtInput;
