<template>
	<at-image
		:style="{ ...style, borderRadius: '2px' }"
		v-bind="$props"
	></at-image>
</template>

<script>
import AtCustomerImage from './CustomImageConfig';
export default {
	name: 'AtGoodsImage',
	...AtCustomerImage,
	props: {
		...AtCustomerImage.props,
		src: {
			type: String,
			default: require('./images/goods.png')
		}
	}
};
</script>
