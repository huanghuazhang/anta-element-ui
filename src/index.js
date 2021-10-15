import ElementUI from 'element-ui';
import AtButton from './components/AtButton';
import AtIcon from './components/AtIcon';
import AtClipboard from './components/AtClipboard';

const components = [AtButton, AtIcon, AtClipboard];

export * from 'element-ui';
export { AtButton, AtIcon, AtClipboard };

export default {
	...ElementUI,
	install(Vue, opts = {}) {
		ElementUI.install(Vue, opts);

		components.forEach(component => {
			Vue.component(component.name, component);
		});
	}
};
