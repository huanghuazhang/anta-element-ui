import ElementUI from 'element-ui';
import AtButton from './components/AtButton';
import AtButtonGroup from './components/AtButtonGroup';
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
import AtSkeleton from './components/AtSkeleton';
import AtSkeletonItem from './components/AtSkeletonItem';
import AtDialog from './components/AtDialog';
import AtProgress from './components/AtProgress';
import AtLoading from './components/AtLoading';

import AtInput from './components/AtInput';
import AtAutocomplete from './components/AtAutocomplete';
import AtRadio from './components/AtRadio';
import AtRadioGroup from './components/AtRadioGroup';
import AtRadioButton from './components/AtRadioButton';
import './components/AtMessageBox';
import AtPopover from './components/AtPopover';

export * from 'element-ui';
export {
	AtButton,
	AtButtonGroup,
	AtIcon,
	AtClipboard,
	AtBreadcrumb,
	AtBreadcrumbItem,
	AtDropdown,
	AtDropdownItem,
	AtDropdownMenu,
	AtSteps,
	AtStep,
	AtAlert,
	AtPopover,
	AtSkeleton,
	AtSkeletonItem,
	AtDialog,
	AtProgress,
	AtLoading,
	AtInput,
	AtAutocomplete,
	AtRadio,
	AtRadioGroup,
	AtRadioButton
};

const components = [
	AtButton,
	AtButtonGroup,
	AtIcon,
	AtClipboard,
	AtBreadcrumb,
	AtBreadcrumbItem,
	AtDropdown,
	AtDropdownItem,
	AtDropdownMenu,
	AtSteps,
	AtStep,
	AtAlert,
	AtPopover,
	AtSkeleton,
	AtSkeletonItem,
	AtDialog,
	AtProgress,
	AtLoading,
	AtInput,
	AtAutocomplete,
	AtRadio,
	AtRadioGroup,
	AtRadioButton
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
