import ElBreadcrumb from 'element-ui/packages/breadcrumb/src/breadcrumb';
import withStaticClass from '../../utils/withStaticClass';

const AtBreadcrumb = {
	...ElBreadcrumb,
	name: 'AtBreadcrumb',
	render(...args) {
		const element = withStaticClass(this, ElBreadcrumb, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtBreadcrumb.install = function(Vue) {
	Vue.component(AtBreadcrumb.name, AtBreadcrumb);
};

export default AtBreadcrumb;
