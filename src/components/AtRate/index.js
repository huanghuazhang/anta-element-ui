import ElRate from 'element-ui/packages/rate/src/main';
import withStaticClass from '../../utils/withStaticClass';

const AtRate = {
	...ElRate,
	name: 'AtRate',
	props: {
		...ElRate.props,

		iconClasses: {
			type: [Array, Object],
			default() {
				return ['at-icon-star', 'at-icon-star', 'at-icon-star'];
			}
		},
		voidIconClass: {
			type: String,
			default: 'at-icon-star-o'
		},
		disabledVoidIconClass: {
			type: String,
			default: 'at-icon-star'
		}
	},

	render(...args) {
		const element = withStaticClass(this, ElRate, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtRate.install = function(Vue) {
	Vue.component(AtRate.name, AtRate);
};

export default AtRate;
