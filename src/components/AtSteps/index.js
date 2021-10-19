import ElSteps from 'element-ui/packages/steps/src/steps';
import withStaticClass from '../../utils/withStaticClass';

const AtSteps = {
	...ElSteps,
	name: 'AtSteps',
	render(...args) {
		const element = withStaticClass(this, ElSteps, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtSteps.install = function(Vue) {
	Vue.component(AtSteps.name, AtSteps);
};

export default AtSteps;
