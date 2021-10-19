import ElBreadcrumb from 'element-ui/packages/breadcrumb/src/breadcrumb-item';
import withStaticClass from '../../utils/withStaticClass';

const AtBreadcrumbItem = {
	...ElBreadcrumb,
	name: 'AtBreadcrumbItem',
	render(...args) {
		const element = withStaticClass(this, ElBreadcrumb, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtBreadcrumbItem.install = function(Vue) {
	Vue.component(AtBreadcrumbItem.name, AtBreadcrumbItem);
};

export default AtBreadcrumbItem;
