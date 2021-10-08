<template>
	<div ref="element" class="at-clipboard" :data-clipboard-text="text">
		<slot></slot>
	</div>
</template>

<script>
import ClipboardJS from 'clipboard';

export default {
	name: 'AtClipboard',
	props: {
		text: {
			type: String
		}
	},
	data() {
		return {
			clipboard: null
		};
	},
	updated() {
		this.bindClipboard();
	},
	mounted() {
		this.bindClipboard();
	},
	destroyed() {
		if (this.clipboard) {
			this.clipboard.destroy();
			this.clipboard = null;
		}
	},
	methods: {
		bindClipboard() {
			if (this.clipboard) {
				this.clipboard.destroy();
				this.clipboard = null;
			}

			const clipboard = new ClipboardJS(this.$refs.element);

			this.clipboard = clipboard;

			clipboard.on('success', e => {
				console.info('Action:', e.action);
				console.info('Text:', e.text);
				console.info('Trigger:', e.trigger);
				e.clearSelection();
				this.$emit('success', e);
			});
			clipboard.on('error', e => {
				console.error('Action:', e.action);
				console.error('Trigger:', e.trigger);
				this.$emit('error', e);
			});
		}
	}
};
</script>
