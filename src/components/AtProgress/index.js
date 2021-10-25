import ElProgress from 'element-ui/packages/progress/src/progress';
import withStaticClass from '../../utils/withStaticClass';

const AtProgress = {
	...ElProgress,
	name: 'AtProgress',
	computed: {
		...ElProgress.computed,
		stroke() {
			let ret;
			if (this.color) {
				ret = this.getCurrentColor(this.percentage);
			} else {
				switch (this.status) {
					case 'success':
						ret = '#2da641';
						break;
					case 'exception':
						ret = '#d40000';
						break;
					case 'warning':
						ret = '#ed6a0c';
						break;
					default:
						ret = '#155bd4';
				}
			}
			return ret;
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElProgress, ...args);

		if (element?.context?.stroke) {
			(element.children || []).forEach(item => {
				if (item?.data?.style) {
					item.data.style.color = element.context.stroke;
				}
			});
		}
		return element;
	}
};

/* istanbul ignore next */
AtProgress.install = function(Vue) {
	Vue.component(AtProgress.name, AtProgress);
};

export default AtProgress;
