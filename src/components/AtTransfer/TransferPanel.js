import ElTransferPanel from 'element-ui/packages/transfer/src/transfer-panel';
import AtInput from '../AtInput';
import AtCheckbox from '../AtCheckbox';
import AtCheckboxGroup from '../AtCheckboxGroup';
import TransferPanelTemplate from './TransferPanelTemplate.vue';

const AtTransferPanel = {
	...ElTransferPanel,
	components: {
		...ElTransferPanel.components,
		ElCheckboxGroup: AtCheckboxGroup,
		ElCheckbox: AtCheckbox,
		ElInput: AtInput
	},
	computed: {
		...ElTransferPanel.computed,
		inputIcon() {
			return this.query.length > 0 && this.inputHover
				? 'close-circle'
				: 'search';
		}
	},
	methods: {
		...ElTransferPanel.methods,

		clearQuery() {
			if (this.inputIcon === 'close-circle') {
				this.query = '';
			}
		}
	},
	render: TransferPanelTemplate.render,
	staticRenderFns: TransferPanelTemplate.staticRenderFns
};

export default AtTransferPanel;
