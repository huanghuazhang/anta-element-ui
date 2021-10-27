import ElPopover from 'element-ui/packages/popover/src/main';
import withStaticClass from '../../utils/withStaticClass';

const AtPopover = {
	...ElPopover,
	name: 'AtPopover',
	render(...args) {
		const element = withStaticClass(this, ElPopover, ...args);

		if (element?.children[0]) {
			if (!element?.children[0]?.data?.class) {
				element.children[0].data.class = [];
			}
			element?.children[0]?.data?.class?.push('at-popover');
		}

		return element;
	}
};

/* istanbul ignore next */
AtPopover.install = function(Vue) {
	Vue.component(AtPopover.name, AtPopover);
};

export default AtPopover;
