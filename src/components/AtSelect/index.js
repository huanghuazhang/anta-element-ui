import ElSelect from 'element-ui/packages/select/src/select';
import withStaticClass from '../../utils/withStaticClass';

const AtSelect = {
	...ElSelect,
	name: 'AtSelect',

	props: {
		...ElSelect.props,
		visibleArrow: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'small'
		},
		noMatchText: {
			type: String,
			default: '无搜索结果'
		},
		block: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...ElSelect.computed,
		iconClass() {
			return this.visible ? 'arrow-up is-reverse' : 'arrow-up';
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElSelect, ...args);
		const dropdown = element.children[2];

		if (dropdown) {
			if (!dropdown.data.class) {
				dropdown.data.class = [];
			}
			dropdown.data.class.push('at-select-dropdown');

			if (this.visibleArrow === false) {
				dropdown.data.class.push('at-select-dropdown--hide-arrow');
			}
		}

		element.data.class.push({
			'is-block': this.block
		});

		return element;
	}
};

/* istanbul ignore next */
AtSelect.install = function(Vue) {
	Vue.component(AtSelect.name, AtSelect);
};

export default AtSelect;
