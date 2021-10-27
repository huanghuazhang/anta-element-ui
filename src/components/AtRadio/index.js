import ElRadio from 'element-ui/packages/radio/src/radio';
import withStaticClass from '../../utils/withStaticClass';

const AtRadio = {
	...ElRadio,
	name: 'AtRadio',
	render(...args) {
		const element = withStaticClass(this, ElRadio, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtRadio.install = function(Vue) {
	Vue.component(AtRadio.name, AtRadio);
};

export default AtRadio;
