export default function withProps(props) {
	return {
		...props,
		popperClass: {
			type: String,
			default: 'at-date-picker'
		},
		clearIcon: {
			type: String,
			default: 'at-icon-close-circle'
		},
		rangeSeparator: {
			type: String,
			default: '至'
		},
		size: {
			type: String,
			default: 'small'
		}
	};
}
