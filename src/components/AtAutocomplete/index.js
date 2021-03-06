import ElAutocomplete from 'element-ui/packages/autocomplete/src/autocomplete';
import withStaticClass from '../../utils/withStaticClass';
import AtAutocompleteSuggestions from './suggestions';

const AtAutocomplete = {
	...ElAutocomplete,
	name: 'AtAutocomplete',
	props: {
		...ElAutocomplete.props,
		size: {
			type: String,
			default: 'small'
		},
		visibleArrow: {
			type: Boolean,
			default: false
		},
		block: {
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

		if (!element.data.class) {
			element.data.class = [];
		}
		element.data.class.push({
			'is-block': this.block
		});

		if (element?.children[1]) {
			element?.children[1]?.data?.class?.push('at-autocomplete-suggestion');

			if (this.visibleArrow === false) {
				element?.children[1]?.data?.class?.push(
					'at-autocomplete-suggestion--hide-arrow'
				);
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
