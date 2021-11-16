import AtImage from './index.js';

export default {
	props: {
		...AtImage.props,
		size: {
			/**
			 * xlarge
			 * large
			 * medium
			 * small
			 * mini
			 */
			type: String,
			default: 'large'
		}
	},
	computed: {
		style() {
			const size = { xlarge: 96, large: 80, medium: 48, small: 40, mini: 30 }[
				this.size
			];

			return {
				width: `${size}px`,
				height: `${size}px`
			};
		}
	}
};
