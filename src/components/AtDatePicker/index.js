import ElDatePicker from 'element-ui/packages/date-picker/src/picker/date-picker';
import ElPicker from 'element-ui/packages/date-picker/src/picker';

import DatePanel from 'element-ui/packages/date-picker/src/panel/date';
import DateRangePanel from 'element-ui/packages/date-picker/src/panel/date-range';
import MonthRangePanel from 'element-ui/packages/date-picker/src/panel/month-range';

import withStaticClass from '../../utils/withStaticClass';
import AtInput from '../AtInput';
import AtButton from '../AtButton';
import DateRangeTemplate from './DateRangeTemplate';
import DateTemplate from './DateTemplate';

const getPanel = function(type) {
	let panel = {
		...DatePanel,
		render: DateTemplate.render,
		staticRenderFns: DateTemplate.staticRenderFns
	};

	if (type === 'daterange' || type === 'datetimerange') {
		panel = {
			...DateRangePanel,
			render: DateRangeTemplate.render,
			staticRenderFns: DateRangeTemplate.staticRenderFns
		};
	} else if (type === 'monthrange') {
		panel = MonthRangePanel;
	}
	return withComponents({
		...panel,
		components: withComponents(panel.components)
	});
};

const withComponents = components => {
	return {
		...components,
		ElInput: AtInput,
		ElButton: AtButton
	};
};

const AtDatePicker = {
	...ElDatePicker,
	name: 'AtDatePicker',
	components: withComponents({
		...ElPicker.components,
		...ElDatePicker.components
	}),
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
	},
	watch: {
		...ElPicker.watch,
		...ElDatePicker.watch,
		type(type) {
			if (this.picker) {
				this.unmountPicker();
				this.panel = getPanel(type);
				this.mountPicker();
			} else {
				this.panel = getPanel(type);
			}
		}
	},

	created() {
		this.panel = getPanel(this.type);
	}
};

/* istanbul ignore next */
AtDatePicker.install = function(Vue) {
	Vue.component(AtDatePicker.name, AtDatePicker);
};

export default AtDatePicker;
