<template>
	<transition name="el-zoom-in-top" @after-leave="doDestroy">
		<div
			v-show="showPopper"
			class="el-autocomplete-suggestion el-popper"
			:class="{ 'is-loading': !parent.hideLoading && parent.loading }"
			:style="{ width: dropdownWidth }"
			role="region"
		>
			<el-scrollbar
				tag="ul"
				wrap-class="el-autocomplete-suggestion__wrap"
				view-class="el-autocomplete-suggestion__list"
			>
				<li v-if="!parent.hideLoading && parent.loading">
					<at-loading visible :size="30" static text="加载中"></at-loading>
				</li>
				<slot v-else> </slot>
			</el-scrollbar>
		</div>
	</transition>
</template>
