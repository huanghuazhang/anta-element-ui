import ElOption from 'element-ui/packages/select/src/option';
import withStaticClass from '../../utils/withStaticClass';

const AtOption = {
	...ElOption,
	name: 'AtOption',
	render(...args) {
		const element = withStaticClass(this, ElOption, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtOption.install = function(Vue) {
	Vue.component(AtOption.name, AtOption);
};

export default AtOption;
