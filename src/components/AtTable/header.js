import ElTableHeader from 'element-ui/packages/table/src/table-header';
import withStaticClass from '../../utils/withStaticClass';
import ElCheckbox from '../AtCheckbox';

const AtTableHeader = {
	...ElTableHeader,
	name: 'AtTableHeader',
	components: {
		...ElTableHeader.components,
		ElCheckbox
	},
	render(...args) {
		const element = withStaticClass(this, ElTableHeader, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtTableHeader.install = function(Vue) {
	Vue.component(AtTableHeader.name, AtTableHeader);
};

export default AtTableHeader;
