import ElTimelineItem from 'element-ui/packages/timeline/src/item';
import withStaticClass from '../../utils/withStaticClass';
import TimelineTemplate from './TimelineItemTemplate.vue';

const AtTimelineItem = {
	...ElTimelineItem,
	name: 'AtTimelineItem',
	props: {
		...ElTimelineItem.props
	},

	staticRenderFns: TimelineTemplate.staticRenderFns,
	render(...args) {
		const element = withStaticClass(
			this,
			{
				...ElTimelineItem,

				render: TimelineTemplate.render
			},
			...args
		);

		return element;
	}
};

/* istanbul ignore next */
AtTimelineItem.install = function(Vue) {
	Vue.component(AtTimelineItem.name, AtTimelineItem);
};

export default AtTimelineItem;
