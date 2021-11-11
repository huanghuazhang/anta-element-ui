import ElTransfer from 'element-ui/packages/transfer/src/main';
import withStaticClass from '../../utils/withStaticClass';
import AtButton from '../AtButton';
import AtTransferPanel from './TransferPanel';
import TransferTemplate from './TransferTemplate.vue';

const AtTransfer = {
	...ElTransfer,
	name: 'AtTransfer',
	components: {
		...ElTransfer.components,
		TransferPanel: AtTransferPanel,
		ElButton: AtButton
	},
	staticRenderFns: TransferTemplate.staticRenderFns,
	render(...args) {
		const element = withStaticClass(
			this,
			{
				...ElTransfer,
				render: TransferTemplate.render
			},
			...args
		);

		return element;
	}
};

/* istanbul ignore next */
AtTransfer.install = function(Vue) {
	Vue.component(AtTransfer.name, AtTransfer);
};

export default AtTransfer;
