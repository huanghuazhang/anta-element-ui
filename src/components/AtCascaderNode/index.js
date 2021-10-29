import ElCascaderNode from 'element-ui/packages/cascader-panel/src/cascader-node';
import withStaticClass from '../../utils/withStaticClass';
import AtCheckbox from '../AtCheckbox';
import AtRadio from '../AtRadio';

const AtCascaderNode = {
	...ElCascaderNode,
	name: 'AtCascaderNode',
	components: {
		...ElCascaderNode.components,
		ElCheckbox: AtCheckbox,
		ElRadio: AtRadio
	},
	render(...args) {
		const element = withStaticClass(this, ElCascaderNode, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtCascaderNode.install = function(Vue) {
	Vue.component(AtCascaderNode.name, AtCascaderNode);
};

export default AtCascaderNode;
