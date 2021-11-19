import ElTreeNode from 'element-ui/packages/tree/src/tree-node.vue';
import withStaticClass from '../../utils/withStaticClass';
import ElCollapseTransition from '../AtCollapseItem/transition';
import ElCheckbox from '../AtCheckbox';

const AtTreeNode = {
	...ElTreeNode,
	name: 'ElTreeNode',
	components: {
		...ElTreeNode.components,
		ElCollapseTransition,
		ElCheckbox
	},
	render(...args) {
		const element = withStaticClass(this, ElTreeNode, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtTreeNode.install = function(Vue) {
	Vue.component(AtTreeNode.name, AtTreeNode);
};

export default AtTreeNode;
