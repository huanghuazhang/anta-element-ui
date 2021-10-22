import ElAlert from 'element-ui/packages/alert/src/main';
import withStaticClass from '../../utils/withStaticClass';

const AtAlert = {
	...ElAlert,
	name: 'AtAlert',
	render(...args) {
		const element = withStaticClass(this, ElAlert, ...args);

		element.data.staticClass = 'at-alert';

		if (!element.data.class) {
			element.data.class = [];
		}

		element.data.class.push({
			'is-big': !!this.description
		});

		return element;
	}
};

/* istanbul ignore next */
AtAlert.install = function(Vue) {
	Vue.component(AtAlert.name, AtAlert);
};

export default AtAlert;
