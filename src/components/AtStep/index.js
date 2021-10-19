import ElStep from 'element-ui/packages/steps/src/step';
import withStaticClass from '../../utils/withStaticClass';

const AtStep = {
	...ElStep,
	name: 'AtStep',
	render(...args) {
		const element = withStaticClass(this, ElStep, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtStep.install = function(Vue) {
	Vue.component(AtStep.name, AtStep);
};

export default AtStep;
