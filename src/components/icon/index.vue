<template>
	<i :class="'at-icon-' + name"></i>
</template>

<script>
export default {
	name: 'AtIcon',

	props: {
		name: String
	}
};
</script>
