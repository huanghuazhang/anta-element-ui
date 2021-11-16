<template>
	<at-image
		:style="{ ...style, borderRadius: style.width }"
		v-bind="$props"
	></at-image>
</template>

<script>
import AtCustomerImage from './CustomImageConfig';
export default {
	name: 'AtVipImage',
	...AtCustomerImage,
	props: {
		...AtCustomerImage.props,
		src: {
			type: String,
			default: require('./images/vip.png')
		}
	}
};
</script>
