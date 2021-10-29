import ElCascaderMenu from 'element-ui/packages/cascader-panel/src/cascader-menu';
import withStaticClass from '../../utils/withStaticClass';
import AtCascaderNode from '../AtCascaderNode';

const AtCascaderMenu = {
	...ElCascaderMenu,
	name: 'AtCascaderMenu',
	data() {
		return {
			...ElCascaderMenu.data.call(this),
			minWidth: 0
		};
	},
	components: {
		...ElCascaderMenu.components,
		CascaderNode: AtCascaderNode
	},
	updated(...args) {
		ElCascaderMenu.updated?.call(this, ...args);
		this.updateMinWidth();
	},
	mounted(...args) {
		ElCascaderMenu.mounted?.call(this, ...args);
		this.updateMinWidth();
	},
	render(...args) {
		const element = withStaticClass(this, ElCascaderMenu, ...args);

		if (!element.data.style) {
			element.data.style = {};
		}
		element.data.style.minWidth = `${this.minWidth}px`;

		return element;
	},
	methods: {
		...ElCascaderMenu.methods,
		updateMinWidth() {
			const parent = this.$parent?.$parent?.$el;

			// this.$el.minWidth = `${parent?.offsetWidth ?? 0}px`;
			this.minWidth = parent?.offsetWidth ?? 0;
		}
	}
};

/* istanbul ignore next */
AtCascaderMenu.install = function(Vue) {
	Vue.component(AtCascaderMenu.name, AtCascaderMenu);
};

export default AtCascaderMenu;
