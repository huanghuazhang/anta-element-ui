import ElRow from 'element-ui/packages/row/src/row';
import withStaticClass from '../../utils/withStaticClass';

const AtRow = {
	...ElRow,
	name: 'AtRow',
	render(...args) {
		const element = withStaticClass(this, ElRow, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtRow.install = function(Vue) {
	Vue.component(AtRow.name, AtRow);
};

export default AtRow;
