import ElTabs from 'element-ui/packages/tabs/src/tabs';
import withStaticClass from '../../utils/withStaticClass';

const AtTabs = {
	...ElTabs,
	name: 'AtTabs',
	methods: {
		...ElTabs.methods,
		calcPaneInstances(isForceUpdate = false) {
			if (this.$slots.default) {
				const paneSlots = this.$slots.default.filter(
					vnode =>
						vnode.tag &&
						vnode.componentOptions &&
						vnode.componentOptions.Ctor.options.name === 'AtTabPanel'
				);
				// update indeed
				const panes = paneSlots.map(
					({ componentInstance }) => componentInstance
				);
				const panesChanged = !(
					panes.length === this.panes.length &&
					panes.every((pane, index) => pane === this.panes[index])
				);
				if (isForceUpdate || panesChanged) {
					this.panes = panes;
				}
			} else if (this.panes.length !== 0) {
				this.panes = [];
			}
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElTabs, ...args);

		element.data.class['at-tabs'] = true;

		if (this.type === 'button') {
			element.data.class['at-tabs--button'] = true;
		}

		return element;
	}
};

/* istanbul ignore next */
AtTabs.install = function(Vue) {
	Vue.component(AtTabs.name, AtTabs);
};

export default AtTabs;
