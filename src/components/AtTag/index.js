import ElTag from 'element-ui/packages/tag/src/tag';
import withStaticClass from '../../utils/withStaticClass';

const AtTag = {
	...ElTag,
	name: 'AtTag',
	props: {
		...ElTag.props,
		size: {
			type: String,
			default: 'small'
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElTag, ...args);

		element.context.$vnode.data = {};
		element.context.$vnode.data.class = ['at-tag'];

		return element;
	}
};

/* istanbul ignore next */
AtTag.install = function(Vue) {
	Vue.component(AtTag.name, AtTag);
};

export default AtTag;
