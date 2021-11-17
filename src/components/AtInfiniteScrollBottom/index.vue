<template>
	<div class="at-infinite-scroll-bottom">
		<at-loading v-if="loading" static :size="30" visible></at-loading>
		<div class="at-infinite-scroll-bottom__no-more" v-else-if="noMore">
			{{ noMoreText }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'AtInfiniteScrollBottom',
	props: {
		loading: {
			type: Boolean,
			default: false
		},
		noMore: {
			type: Boolean,
			default: false
		},
		noMoreText: {
			type: String,
			default: '没有更多了'
		}
	}
};
</script>
