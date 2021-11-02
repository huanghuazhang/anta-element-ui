import ElCascader from 'element-ui/packages/cascader/src/cascader';
import withStaticClass from '../../utils/withStaticClass';
import AtCascaderPanel from '../AtCascaderPanel';

const AtCascader = {
	...ElCascader,
	name: 'AtCascader',
	props: {
		...ElCascader.props,
		visibleArrow: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'small'
		}
	},
	components: {
		...ElCascader.components,
		ElCascaderPanel: AtCascaderPanel
	},
	render(...args) {
		const element = withStaticClass(this, ElCascader, ...args);
		const dropdown = element.children[2];

		if (dropdown) {
			if (!dropdown.data.class) {
				dropdown.data.class = [];
			}
			dropdown.data.class.push('at-cascader__dropdown');

			if (this.visibleArrow === false) {
				dropdown.data.class.push('at-cascader__dropdown--hide-arrow');
			}
		}

		return element;
	}
};

/* istanbul ignore next */
AtCascader.install = function(Vue) {
	Vue.component(AtCascader.name, AtCascader);
};

export default AtCascader;
