import ElCol from 'element-ui/packages/col/src/col';
import withStaticClass from '../../utils/withStaticClass';

const AtCol = {
	...ElCol,
	name: 'AtCol',
	render(...args) {
		const element = withStaticClass(this, ElCol, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtCol.install = function(Vue) {
	Vue.component(AtCol.name, AtCol);
};

export default AtCol;
