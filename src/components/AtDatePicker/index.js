import ElDatePicker from 'element-ui/packages/date-picker/src/picker/date-picker';
import ElPicker from 'element-ui/packages/date-picker/src/picker';
import withStaticClass from '../../utils/withStaticClass';
import AtInput from '../AtInput';

const AtDatePicker = {
	...ElDatePicker,
	name: 'AtDatePicker',
	components: {
		...ElPicker.components,
		...ElDatePicker.components,
		ElInput: AtInput
	},
	props: {
		...ElDatePicker.props,
		popperClass: {
			type: String,
			default: 'at-date-picker'
		},
		clearIcon: {
			type: String,
			default: 'at-icon-close-circle'
		},
		rangeSeparator: {
			type: String,
			default: '至'
		},
		size: {
			type: String,
			default: 'small'
		}
	},
	computed: {
		...ElPicker.computed,
		...ElDatePicker.computed,

		triggerClass() {
			return (
				this.prefixIcon ||
				(this.type.indexOf('time') !== -1
					? 'at-icon-time'
					: 'at-icon-calendar-o')
			);
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElPicker, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtDatePicker.install = function(Vue) {
	Vue.component(AtDatePicker.name, AtDatePicker);
};

export default AtDatePicker;
