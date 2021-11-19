import ElTableColumn from 'element-ui/packages/table/src/table-column';
import withStaticClass from '../../utils/withStaticClass';
import ElCheckbox from '../AtCheckbox';

const AtTableColumn = {
	...ElTableColumn,
	name: 'AtTableColumn',
	components: {
		...ElTableColumn.components,
		ElCheckbox
	},
	render(...args) {
		const element = withStaticClass(this, ElTableColumn, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtTableColumn.install = function(Vue) {
	Vue.component(AtTableColumn.name, AtTableColumn);
};

export default AtTableColumn;
