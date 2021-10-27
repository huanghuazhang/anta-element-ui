import Vue from 'vue';
import ElAutocompleteSuggestions from 'element-ui/packages/autocomplete/src/autocomplete-suggestions';
import withStaticClass from '../../utils/withStaticClass';

const template = Vue.compile(`
	<transition name="el-zoom-in-top" @after-leave="doDestroy">
		<div
			v-show="showPopper"
			class="el-autocomplete-suggestion el-popper"
			:class="{ 'is-loading': !parent.hideLoading && parent.loading }"
			:style="{ width: dropdownWidth }"
			role="region">
			<el-scrollbar
				tag="ul"
				wrap-class="el-autocomplete-suggestion__wrap"
				view-class="el-autocomplete-suggestion__list">
				<li v-if="!parent.hideLoading && parent.loading"><at-loading visible :size="30" static text="加载中"></at-loading></li>
				<slot v-else>
				</slot>
			</el-scrollbar>
		</div>
	</transition>
	`);

const AtAutocompleteSuggestions = {
	...ElAutocompleteSuggestions,
	name: 'AtAutocompleteSuggestions',
	render(...args) {
		const element = withStaticClass(
			this,
			{
				...ElAutocompleteSuggestions,
				render: template.render,
				staticRenderFns: template.staticRenderFns
			},
			...args
		);
		return element;
	}
};

/* istanbul ignore next */
AtAutocompleteSuggestions.install = function(Vue) {
	Vue.component(AtAutocompleteSuggestions.name, AtAutocompleteSuggestions);
};

export default AtAutocompleteSuggestions;
