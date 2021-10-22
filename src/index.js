import ElementUI from 'element-ui';
import AtButton from './components/AtButton';
import AtIcon from './components/AtIcon';
import AtClipboard from './components/AtClipboard';
import AtBreadcrumb from './components/AtBreadcrumb';
import AtBreadcrumbItem from './components/AtBreadcrumbItem';
import AtDropdown from './components/AtDropdown';
import AtDropdownItem from './components/AtDropdownItem';
import AtDropdownMenu from './components/AtDropdownMenu';
import AtSteps from './components/AtSteps';
import AtStep from './components/AtStep';
import AtAlert from './components/AtAlert';

export * from 'element-ui';
export {
	AtButton,
	AtIcon,
	AtClipboard,
	AtBreadcrumb,
	AtBreadcrumbItem,
	AtDropdown,
	AtDropdownItem,
	AtDropdownMenu,
	AtSteps,
	AtStep,
	AtAlert
};

const components = [
	AtButton,
	AtIcon,
	AtClipboard,
	AtBreadcrumb,
	AtBreadcrumbItem,
	AtDropdown,
	AtDropdownItem,
	AtDropdownMenu,
	AtSteps,
	AtStep,
	AtAlert
];

export default {
	...ElementUI,
	install(Vue, opts = {}) {
		ElementUI.install(Vue, opts);

		components.forEach(component => {
			Vue.component(component.name, component);
		});
	}
};
