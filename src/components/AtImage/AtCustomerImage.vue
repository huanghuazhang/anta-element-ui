<template>
	<at-image
		:style="{ ...style, borderRadius: style.width }"
		v-bind="$props"
	></at-image>
</template>

<script>
import AtCustomerImage from './CustomImageConfig';

export default {
	name: 'AtCustomerImage',
	...AtCustomerImage,
	props: {
		...AtCustomerImage.props,
		src: {
			type: String,
			default: require('./images/customer.png')
		}
	}
};
</script>
