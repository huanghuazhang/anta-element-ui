import ElCollapseItem from 'element-ui/packages/collapse/src/collapse-item';
import withStaticClass from '../../utils/withStaticClass';
import ElCollapseTransition from './transition';

const AtCollapseItem = {
	...ElCollapseItem,
	name: 'AtCollapseItem',
	methods: {
		...ElCollapseItem.methods
	},
	components: {
		...ElCollapseItem.components,
		ElCollapseTransition
	},
	render(...args) {
		const element = withStaticClass(this, ElCollapseItem, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtCollapseItem.install = function(Vue) {
	Vue.component(AtCollapseItem.name, AtCollapseItem);
};

export default AtCollapseItem;
