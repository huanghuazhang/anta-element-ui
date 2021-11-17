function withAtClass(cls) {
	let sCls = cls;
	sCls = sCls.split(' ');
	sCls = sCls.filter(item => !!(item || '').trim());
	sCls = sCls.map(item => item.replace(/^(el-)/g, 'at-'));
	sCls = sCls.join(' ');

	return sCls;
}

export default function withStaticClass(scope, component, ...args) {
	const element = component.render.bind(scope)(...args);
	let ele = element;

	if (!element.data) {
		ele = element.children[0];
	}

	let { staticClass, class: cls } = ele.data;

	if (staticClass) {
		ele.data.staticClass = `${staticClass} ${withAtClass(staticClass)}`;
	} else if (cls) {
		if (Array.isArray(cls) && cls.indexOf(withAtClass(cls[0])) === -1) {
			cls.push(withAtClass(cls[0]));
		} else if (typeof cls === 'string') {
			ele.data.class = `${cls} ${withAtClass(cls)}`;
		}
	}
	return element;
}
