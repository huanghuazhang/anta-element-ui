import ElAlert from 'element-ui/packages/alert/src/main';
import withStaticClass from '../../utils/withStaticClass';
import AlertTemplate from './AlertTemplate.vue';

const TYPE_CLASSES_MAP = {
	success: 'at-icon-check-circle',
	warning: 'at-icon-warning',
	error: 'at-icon-close-circle'
};

const AtAlert = {
	...ElAlert,
	name: 'AtAlert',
	props: {
		...ElAlert.props,
		type: {
			type: String,
			default: 'primary'
		},
		small: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...ElAlert.computed,

		iconClass() {
			return TYPE_CLASSES_MAP[this.type] || 'at-icon-info-circle';
		}
	},
	staticRenderFns: AlertTemplate.staticRenderFns,
	render(...args) {
		const element = withStaticClass(
			this,
			{
				...ElAlert,
				render: AlertTemplate.render
			},
			...args
		);

		element.data.staticClass = 'at-alert';

		if (!element.data.class) {
			element.data.class = [];
		}

		element.data.class.push({
			'is-big': !!this.description
		});
		element.data.class.push({
			'is-small': !!this.small
		});

		return element;
	}
};

/* istanbul ignore next */
AtAlert.install = function(Vue) {
	Vue.component(AtAlert.name, AtAlert);
};

export default AtAlert;
