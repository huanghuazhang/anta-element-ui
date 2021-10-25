export default function withStaticClass(scope, component, ...args) {
	const element = component.render.bind(scope)(...args);
	let ele = element;

	if (!element.data) {
		ele = element.children[0];
	}

	let { staticClass } = ele.data;

	if (!staticClass) {
		staticClass = ele.data.class;

		if (Array.isArray(staticClass)) {
			staticClass = staticClass.join(' ');
		}
	}

	if (staticClass) {
		staticClass = staticClass.split(' ');
		staticClass = staticClass.filter(item => !!(item || '').trim());
		staticClass = staticClass.map(item => item.replace(/^(el-)/g, 'at-'));
		staticClass = staticClass.join(' ');

		if (ele.data.staticClass) {
			ele.data.staticClass = `${ele.data.staticClass} ${staticClass}`;
		} else {
			ele.data.class = `${[ele.data.class]
				.flat()
				.join(' ')} ${staticClass}`.split(' ');
		}
	}
	return element;
}
