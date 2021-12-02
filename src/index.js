import ElementUI from 'element-ui/src/index';
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
import AtLoading from './components/AtLoading/index';

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
import AtCarousel from './components/AtCarousel';
import AtCarouselItem from './components/AtCarouselItem';
import AtCollapse from './components/AtCollapse';
import AtCollapseItem from './components/AtCollapseItem';
import AtTooltip from './components/AtTooltip';
import AtTabs from './components/AtTabs';
import AtTabPanel from './components/AtTabPanel';
import AtTag from './components/AtTag';
import AtTimeline from './components/AtTimeline';
import AtTimelineItem from './components/AtTimelineItem';
import AtTree from './components/AtTree';
import AtTable from './components/AtTable';
import AtTableColumn from './components/AtTableColumn';
import AtPagination from './components/AtPagination';
import AtBadge from './components/AtBadge';
import AtSortable from './components/AtSortable';
import AtSortableItem from './components/AtSortableItem';

import utils from './utils';
import AtMenu from './components/AtMenu';
import AtMenuItem from './components/AtMenuItem';
import AtMenuItemGroup from './components/AtMenuItemGroup';
import AtSubmenu from './components/AtSubmenu';

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
	AtEmpty,
	AtCarousel,
	AtCarouselItem,
	AtTooltip,
	AtTabs,
	AtTabPanel,
	AtTag,
	AtTimeline,
	AtTimelineItem,
	AtTree,
	AtTable,
	AtTableColumn,
	AtPagination,
	AtBadge,
	AtSortable,
	AtSortableItem,
	AtMenu,
	AtMenuItem,
	AtMenuItemGroup,
	AtSubmenu,
	utils
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
	AtEmpty,
	AtCarousel,
	AtCarouselItem,
	AtCollapse,
	AtCollapseItem,
	AtTooltip,
	AtTabs,
	AtTabPanel,
	AtTag,
	AtTimeline,
	AtTimelineItem,
	AtTree,
	AtTable,
	AtTableColumn,
	AtPagination,
	AtBadge,
	AtSortable,
	AtSortableItem,
	AtMenu,
	AtMenuItem,
	AtMenuItemGroup,
	AtSubmenu
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

		components.forEach(component => {
			if (component.install) {
				component.install(Vue);
			} else {
				Vue.component(component.name, component);
			}
		});
	}
};
