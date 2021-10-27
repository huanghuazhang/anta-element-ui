import ElAutocomplete from 'element-ui/packages/autocomplete/src/autocomplete';
import withStaticClass from '../../utils/withStaticClass';
import AtAutocompleteSuggestions from './suggestions';

const AtAutocomplete = {
	...ElAutocomplete,
	name: 'AtAutocomplete',
	props: {
		...ElAutocomplete.props,
		visibleArrow: {
			type: Boolean,
			default: false
		}
	},
	components: {
		...ElAutocomplete.components,
		ElAutocompleteSuggestions: AtAutocompleteSuggestions
	},
	render(...args) {
		const element = withStaticClass(this, ElAutocomplete, ...args);

		if (element?.children[1]) {
			element?.children[1]?.data?.class?.push('at-autocomplete-suggestion');
			element?.children[1]?.data?.class?.push('at-popper');

			if (this.visibleArrow === false) {
				element?.children[1]?.data?.class?.push('at-popper--hide-arrow');
			}
		}
		return element;
	}
};

/* istanbul ignore next */
AtAutocomplete.install = function(Vue) {
	Vue.component(AtAutocomplete.name, AtAutocomplete);
};

export default AtAutocomplete;
