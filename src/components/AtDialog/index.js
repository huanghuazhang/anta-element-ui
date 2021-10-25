import ElDialog from 'element-ui/packages/dialog/src/component';
import withStaticClass from '../../utils/withStaticClass';

const AtDialog = {
	...ElDialog,
	name: 'AtDialog',
	props: {
		...ElDialog.props,
		top: {
			type: String,
			default: '0'
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElDialog, ...args);

		element.data.staticClass = 'at-dialog';

		return element;
	}
};

/* istanbul ignore next */
AtDialog.install = function(Vue) {
	Vue.component(AtDialog.name, AtDialog);
};

export default AtDialog;
