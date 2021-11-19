import ElTableBody from 'element-ui/packages/table/src/table-body';
import withStaticClass from '../../utils/withStaticClass';
import ElCheckbox from '../AtCheckbox';

const AtTableBody = {
	...ElTableBody,
	name: 'AtTableBody',
	components: {
		...ElTableBody.components,
		ElCheckbox
	},
	render(...args) {
		const element = withStaticClass(this, ElTableBody, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtTableBody.install = function(Vue) {
	Vue.component(AtTableBody.name, AtTableBody);
};

export default AtTableBody;
