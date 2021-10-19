export default function withStaticClass(scope, component, ...args) {
	const element = component.render.bind(scope)(...args);

	let { staticClass } = element.data;

	if (!staticClass) {
		staticClass = element.data.class;
	}

	if (staticClass) {
		staticClass = staticClass.split(' ');
		staticClass = staticClass.filter(item => !!(item || '').trim());
		staticClass = staticClass.map(item => item.replace(/^(el-)/g, 'at-'));
		staticClass = staticClass.join(' ');
		if (element.data.staticClass) {
			element.data.staticClass = `${element.data.staticClass} ${staticClass}`;
		} else {
			element.data.class = `${element.data.class} ${staticClass}`;
		}
	}
	return element;
}
