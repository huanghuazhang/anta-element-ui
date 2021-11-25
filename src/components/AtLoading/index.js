import loadingDirective from 'element-ui/packages/loading/src/directive';
import AtLoading from './index.vue';

/* istanbul ignore next */
AtLoading.install = function(Vue) {
	loadingDirective.install(Vue);
	Vue.component(AtLoading.name, AtLoading);
};

export default AtLoading;
