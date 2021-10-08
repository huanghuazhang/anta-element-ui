import ElementUI from 'element-ui';

import './scss/element-variables.scss';

import AtButton from './components/button/index.js';
import AtButtonGroup from './components/button-group/index.js';

const components = [AtButton, AtButtonGroup];

export default {
	...ElementUI,
	install(Vue, opts = {}) {
		ElementUI.install(Vue, opts);

		components.forEach(component => {
			Vue.component(component.name, component);
		});
	}
};
