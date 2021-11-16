import ElImage from 'element-ui/packages/image/src/main';
import withStaticClass from '../../utils/withStaticClass';

const AtImage = {
	...ElImage,
	name: 'AtImage',
	render(...args) {
		const element = withStaticClass(this, ElImage, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtImage.install = function(Vue) {
	Vue.component(AtImage.name, AtImage);
};

export default AtImage;
