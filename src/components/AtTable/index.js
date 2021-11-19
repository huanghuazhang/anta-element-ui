import ElTable from 'element-ui/packages/table/src/table';
import withStaticClass from '../../utils/withStaticClass';
import ElCheckbox from '../AtCheckbox';
import TableHeader from './header';
import TableBody from './body';

const AtTable = {
	...ElTable,
	name: 'AtTable',
	components: {
		...ElTable.components,
		ElCheckbox,
		TableHeader,
		TableBody
	},
	render(...args) {
		const element = withStaticClass(this, ElTable, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtTable.install = function(Vue) {
	Vue.component(AtTable.name, AtTable);
};

export default AtTable;
