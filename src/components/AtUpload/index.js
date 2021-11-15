import ElUpload from 'element-ui/packages/upload/src/index';
import withStaticClass from '../../utils/withStaticClass';

const AtUpload = {
	...ElUpload,
	name: 'AtUpload',
	props: {
		...ElUpload.props
	},
	render(...args) {
		const element = withStaticClass(
			this,
			{
				...ElUpload,
				render() {
					let uploadList;

					if (this.showFileList) {
						uploadList = (
							<UploadList
								disabled={this.uploadDisabled}
								listType={this.listType}
								files={this.uploadFiles}
								on-remove={this.handleRemove}
								handlePreview={this.onPreview}
							>
								{props => {
									if (this.$scopedSlots.file) {
										return this.$scopedSlots.file({
											file: props.file
										});
									}
								}}
							</UploadList>
						);
					}

					const uploadData = {
						props: {
							type: this.type,
							drag: this.drag,
							action: this.action,
							multiple: this.multiple,
							'before-upload': this.beforeUpload,
							'with-credentials': this.withCredentials,
							headers: this.headers,
							name: this.name,
							data: this.data,
							accept: this.accept,
							fileList: this.uploadFiles,
							autoUpload: this.autoUpload,
							listType: this.listType,
							disabled: this.uploadDisabled,
							limit: this.limit,
							'on-exceed': this.onExceed,
							'on-start': this.handleStart,
							'on-progress': this.handleProgress,
							'on-success': this.handleSuccess,
							'on-error': this.handleError,
							'on-preview': this.onPreview,
							'on-remove': this.handleRemove,
							'http-request': this.httpRequest
						},
						ref: 'upload-inner'
					};

					const trigger = this.$slots.trigger || this.$slots.default;
					const uploadComponent = <upload {...uploadData}>{trigger}</upload>;

					return (
						<div>
							{uploadList}
							{this.$slots.trigger
								? [uploadComponent, this.$slots.default]
								: uploadComponent}
							{this.$slots.tip}
						</div>
					);
				}
			},
			...args
		);

		return element;
	}
};

/* istanbul ignore next */
AtUpload.install = function(Vue) {
	Vue.component(AtUpload.name, AtUpload);
};

export default AtUpload;
