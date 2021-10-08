import ElementUI from 'element-ui';

import './scss/theme.scss';

import AtButton from './components/button/index.js';
import AtButtonGroup from './components/button-group/index.js';
import AtIcon from './components/icon/index';
import AtClipboard from './components/clipboard/index';

const components = [AtButton, AtButtonGroup, AtIcon, AtClipboard];

export default {
	...ElementUI,
	install(Vue, opts = {}) {
		ElementUI.install(Vue, opts);

		components.forEach(component => {
			Vue.component(component.name, component);
		});
	}
};
