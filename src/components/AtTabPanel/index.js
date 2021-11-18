import ElTabPanel from 'element-ui/packages/tabs/src/tab-pane';
import withStaticClass from '../../utils/withStaticClass';

const AtTabPanel = {
	...ElTabPanel,
	componentName: 'AtTabPanel',
	name: 'AtTabPanel',
	render(...args) {
		const element = withStaticClass(this, ElTabPanel, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtTabPanel.install = function(Vue) {
	Vue.component(AtTabPanel.name, AtTabPanel);
};

export default AtTabPanel;
