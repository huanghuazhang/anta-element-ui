import ElementUI from 'element-ui';
import locale from 'element-ui/src/locale';
import lang from 'element-ui/lib/locale/lang/zh-CN';

import withCustomMonthDatePicker from './utils/withCustomMonthDatePicker';

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
import AtCheckbox from './components/AtCheckbox';
import AtCheckboxGroup from './components/AtCheckboxGroup';
import AtCheckboxButton from './components/AtCheckboxButton';
import AtSelect from './components/AtSelect';
import AtOption from './components/AtOption';
import AtOptionGroup from './components/AtOptionGroup';
import AtCascader from './components/AtCascader';
import AtDatePicker from './components/AtDatePicker';
import AtTimePicker from './components/AtTimePicker';
import AtTimeSelect from './components/AtTimeSelect';
import AtForm from './components/AtForm';
import AtFormItem from './components/AtFormItem';
import AtRow from './components/AtRow';
import AtCol from './components/AtCol';
import AtSwitch from './components/AtSwitch';
import AtRate from './components/AtRate';
import AtSlider from './components/AtSlider';
import AtInputNumber from './components/AtInputNumber';
import AtTransfer from './components/AtTransfer';
import AtUpload from './components/AtUpload';
import AtImage from './components/AtImage';
import AtCustomerImage from './components/AtImage/AtCustomerImage.vue';
import AtGoodsImage from './components/AtImage/AtGoodsImage.vue';
import AtVipImage from './components/AtImage/AtVipImage.vue';
import AtCard from './components/AtCard';
import AtTitle from './components/AtTitle';
import AtLineClamp from './components/AtLineClamp';
import AtInfiniteScrollBottom from './components/AtInfiniteScrollBottom';
import AtEmpty from './components/AtEmpty';

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
	AtRadioButton,
	AtCheckbox,
	AtCheckboxGroup,
	AtCheckboxButton,
	AtSelect,
	AtOption,
	AtOptionGroup,
	AtCascader,
	AtDatePicker,
	AtTimePicker,
	AtTimeSelect,
	AtForm,
	AtFormItem,
	AtRow,
	AtCol,
	AtSwitch,
	AtRate,
	AtSlider,
	AtInputNumber,
	AtTransfer,
	AtUpload,
	AtImage,
	AtCustomerImage,
	AtGoodsImage,
	AtVipImage,
	AtCard,
	AtTitle,
	AtLineClamp,
	AtInfiniteScrollBottom,
	AtEmpty
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
	AtRadioButton,
	AtCheckbox,
	AtCheckboxGroup,
	AtCheckboxButton,
	AtSelect,
	AtOption,
	AtOptionGroup,
	AtCascader,
	AtDatePicker,
	AtTimePicker,
	AtTimeSelect,
	AtForm,
	AtFormItem,
	AtRow,
	AtCol,
	AtSwitch,
	AtRate,
	AtSlider,
	AtInputNumber,
	AtTransfer,
	AtUpload,
	AtImage,
	AtCustomerImage,
	AtGoodsImage,
	AtVipImage,
	AtCard,
	AtTitle,
	AtLineClamp,
	AtInfiniteScrollBottom,
	AtEmpty
];

export default {
	...ElementUI,
	install(
		Vue,
		opts = {
			locale: withCustomMonthDatePicker(lang)
		}
	) {
		ElementUI.install(Vue, opts);
		locale.use(opts.locale);
		locale.i18n(opts.i18n);

		components.forEach(component => {
			Vue.component(component.name, component);
		});
	}
};
