import ElDatePicker from 'element-ui/packages/date-picker/src/picker/date-picker';
import ElPicker from 'element-ui/packages/date-picker/src/picker';

import DatePanel from 'element-ui/packages/date-picker/src/panel/date';
import DateRangePanel from 'element-ui/packages/date-picker/src/panel/date-range';
import MonthRangePanel from 'element-ui/packages/date-picker/src/panel/month-range';

import withStaticClass from '../../utils/withStaticClass';
import DateRangeTemplate from './DateRangeTemplate';
import DateTemplate from './DateTemplate';
import withComponents from './withComponents';
import withProps from './withProps';
import withComputed from './withComputed';

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

const AtDatePicker = {
	...ElDatePicker,
	name: 'AtDatePicker',
	components: withComponents({
		...ElPicker.components,
		...ElDatePicker.components
	}),
	props: withProps({
		...ElPicker.props,
		...ElDatePicker.props
	}),
	computed: withComputed({
		...ElPicker.computed,
		...ElDatePicker.computed
	}),
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
