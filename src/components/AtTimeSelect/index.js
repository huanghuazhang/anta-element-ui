import ElTimeSelect from 'element-ui/packages/date-picker/src/picker/time-select';
import ElPicker from 'element-ui/packages/date-picker/src/picker';
import withStaticClass from '../../utils/withStaticClass';
import withComponents from '../AtDatePicker/withComponents';
import withProps from '../AtDatePicker/withProps';
import withComputed from '../AtDatePicker/withComputed';

const AtTimeSelect = {
	...ElPicker,
	...ElTimeSelect,
	name: 'AtTimeSelect',
	components: withComponents({
		...ElPicker.components,
		...ElTimeSelect.components
	}),
	props: withProps({
		...ElPicker.props,
		...ElTimeSelect.props
	}),
	computed: withComputed({
		...ElPicker.computed,
		...ElTimeSelect.computed
	}),
	render(...args) {
		const element = withStaticClass(this, ElPicker, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtTimeSelect.install = function(Vue) {
	Vue.component(AtTimeSelect.name, AtTimeSelect);
};

export default AtTimeSelect;
