import ElAutocompleteSuggestions from 'element-ui/packages/autocomplete/src/autocomplete-suggestions';
import withStaticClass from '../../utils/withStaticClass';
import Suggestions from './SuggestionsTemplate';

const AtAutocompleteSuggestions = {
	...ElAutocompleteSuggestions,
	name: 'AtAutocompleteSuggestions',
	render(...args) {
		const element = withStaticClass(
			this,
			{
				...ElAutocompleteSuggestions,
				render: Suggestions.render,
				staticRenderFns: Suggestions.staticRenderFns
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
