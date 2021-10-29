import ElCascaderPanel from 'element-ui/packages/cascader-panel/src/cascader-panel';
import withStaticClass from '../../utils/withStaticClass';
import AtCascaderMenu from '../AtCascaderMenu';

const AtCascaderPanel = {
	...ElCascaderPanel,
	name: 'AtCascaderPanel',
	components: {
		...ElCascaderPanel.components,
		CascaderMenu: AtCascaderMenu
	},
	render(...args) {
		const element = withStaticClass(this, ElCascaderPanel, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtCascaderPanel.install = function(Vue) {
	Vue.component(AtCascaderPanel.name, AtCascaderPanel);
};

export default AtCascaderPanel;
