import ElTimeline from 'element-ui/packages/timeline/src/main';
import withStaticClass from '../../utils/withStaticClass';

const AtTimeline = {
	...ElTimeline,
	name: 'AtTimeline',
	props: {
		...ElTimeline.props
	},
	render(...args) {
		const element = withStaticClass(this, ElTimeline, ...args);

		element.data.class['at-timeline'] = true;

		return element;
	}
};

/* istanbul ignore next */
AtTimeline.install = function(Vue) {
	Vue.component(AtTimeline.name, AtTimeline);
};

export default AtTimeline;
