import ElTree from 'element-ui/packages/tree/src/tree.vue';
import AtTreeNode from './tree-node';
import withStaticClass from '../../utils/withStaticClass';

const AtTree = {
	...ElTree,
	name: 'AtTree',
	components: {
		...ElTree.components,
		ElTreeNode: AtTreeNode
	},
	render(...args) {
		const element = withStaticClass(this, ElTree, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtTree.install = function(Vue) {
	Vue.component(AtTree.name, AtTree);
};

export default AtTree;
