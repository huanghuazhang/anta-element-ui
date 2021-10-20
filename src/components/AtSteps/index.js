import ElSteps from 'element-ui/packages/steps/src/steps';
import withStaticClass from '../../utils/withStaticClass';

const AtSteps = {
	...ElSteps,
	name: 'AtSteps',
	props: {
		...ElSteps.props,
		tag: {
			type: Boolean,
			default: false
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElSteps, ...args);

		element.data.class.push({
			'el-steps--tag': this.tag
		});

		return element;
	}
};

/* istanbul ignore next */
AtSteps.install = function(Vue) {
	Vue.component(AtSteps.name, AtSteps);
};

export default AtSteps;
