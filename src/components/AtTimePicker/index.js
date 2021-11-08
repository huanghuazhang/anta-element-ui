import ElTimePicker from 'element-ui/packages/date-picker/src/picker/time-picker';

import TimePanel from 'element-ui/packages/date-picker/src/panel/time';
import TimeRangePanel from 'element-ui/packages/date-picker/src/panel/time-range';
import TimeTemplate from './TimeTemplate.vue';
import TimeRangeTemplate from './TimeRangeTemplate.vue';
import ElPicker from 'element-ui/packages/date-picker/src/picker';
import withStaticClass from '../../utils/withStaticClass';
import withComponents from '../AtDatePicker/withComponents';
import withProps from '../AtDatePicker/withProps';
import withComputed from '../AtDatePicker/withComputed';

const getPanel = function(type) {
	let panel = {
		...TimePanel,
		render: TimeTemplate.render,
		staticRenderFns: TimeTemplate.staticRenderFns
	};

	if (type === 'timerange') {
		panel = {
			...TimeRangePanel,
			render: TimeRangeTemplate.render,
			staticRenderFns: TimeRangeTemplate.staticRenderFns
		};
	}
	return withComponents({
		...panel,
		components: withComponents(panel.components)
	});
};

const AtTimePicker = {
	...ElPicker,
	...ElTimePicker,
	name: 'AtTimePicker',
	components: withComponents({
		...ElPicker.components,
		...ElTimePicker.components
	}),
	props: withProps({
		...ElPicker.props,
		...ElTimePicker.props
	}),
	computed: withComputed({
		...ElPicker.computed,
		...ElTimePicker.computed
	}),
	render(...args) {
		const element = withStaticClass(this, ElPicker, ...args);

		return element;
	},
	watch: {
		...ElPicker.watch,
		...ElTimePicker.watch,
		isRange(isRange) {
			if (this.picker) {
				this.unmountPicker();
				this.type = isRange ? 'timerange' : 'time';
				this.panel = getPanel(this.type);
				this.mountPicker();
			} else {
				this.type = isRange ? 'timerange' : 'time';
				this.panel = getPanel(this.type);
			}
		}
	},

	created() {
		this.type = this.isRange ? 'timerange' : 'time';
		this.panel = getPanel(this.type);
	}
};

/* istanbul ignore next */
AtTimePicker.install = function(Vue) {
	Vue.component(AtTimePicker.name, AtTimePicker);
};

export default AtTimePicker;
