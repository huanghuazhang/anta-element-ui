import ElStep from 'element-ui/packages/steps/src/step';
import withStaticClass from '../../utils/withStaticClass';

const AtStep = {
	...ElStep,
	name: 'AtStep',
	updated() {
		if (this.$parent.direction !== 'vertical' && this.$parent.simple !== true) {
			const icon = this.$el.querySelector('.el-step__icon');
			const line = this.$el.querySelector('.el-step__line');
			const width = parseInt(getComputedStyle(this.$refs.title).width, 10);
			const iconWidth = parseInt(getComputedStyle(icon).width, 10);
			const left = width * 0.5 - iconWidth * 0.5;
			const offset = 8;

			line.style.left = `${left + iconWidth + offset}px`;
			line.style.right = `${-left + offset}px`;
			icon.style.left = `${left}px`;
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElStep, ...args);

		element.data.class.push({
			'is-tag': this.$parent.tag
		});
		element.data.class.push({
			'not-icon': !this.icon
		});
		element.data.class.push({
			'is-process': this.currentStatus === 'process'
		});
		element.data.class.push({
			'is-success': this.currentStatus === 'success'
		});
		element.data.class.push({
			'is-error': this.currentStatus === 'error'
		});
		element.data.class.push({
			'has-click': this._events.click
		});

		element.data.on = {
			...element.data.on,
			click: () => {
				this.$emit('click');
			}
		};
		return element;
	}
};

/* istanbul ignore next */
AtStep.install = function(Vue) {
	Vue.component(AtStep.name, AtStep);
};

export default AtStep;
