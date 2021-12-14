import ElUpload from 'element-ui/packages/upload/src/index';
import withStaticClass from '../../utils/withStaticClass';
import UploadList from './UploadList.vue';

const AtUpload = {
	...ElUpload,
	name: 'AtUpload',
	components: {
		...ElUpload.components,
		UploadList
	},
	props: {
		...ElUpload.props,
		block: {
			type: Boolean,
			default: false
		},
		sizeLimit: {
			type: Number,
			default: 0
		}
	},
	render(...args) {
		const that = this;
		const element = withStaticClass(
			this,
			{
				...ElUpload,
				render() {
					let uploadList;

					if (this.showFileList && this.uploadFiles.length) {
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

					const sizeText =
						this.sizeLimit > 1024
							? parseFloat((this.sizeLimit / 1024).toFixed(2)) + 'M'
							: this.sizeLimit + 'K';

					const uploadData = {
						props: {
							type: this.type,
							drag: this.drag,
							action: this.action,
							multiple: this.multiple,
							beforeUpload(...args) {
								const [file] = args;

								if (
									file &&
									that.sizeLimit &&
									that.sizeLimit < file.size / 1024
								) {
									this.$message.error({
										message: `单个文件不超过 ${sizeText}`
									});
									return false;
								}
								return that?.beforeUpload?.call(this, ...args);
							},
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
					const tip = this.sizeLimit ? (
						<div class="el-upload__tip">单个文件不超过&nbsp;{sizeText}</div>
					) : (
						undefined
					);
					const fileList = this.fileList || [];

					let button = (
						<at-button
							disabled={fileList >= this.limit}
							class="at-upload__button"
							type="text"
						>
							<at-icon name="upload" class="at-icon--left"></at-icon>
							<span>添加文件</span>
							{this.limit ? (
								<b>
									{fileList.length}/{this.limit}
								</b>
							) : (
								undefined
							)}
						</at-button>
					);

					if (this.listType === 'picture-card') {
						button = (
							<div class="at-upload__plus">
								<at-icon name="plus"></at-icon>
							</div>
						);
					}

					const trigger = this.$slots.trigger || this.$slots.default || button;
					const uploadComponent = <upload {...uploadData}>{trigger}</upload>;

					return (
						<div
							class={[
								'at-upload',
								this.block ? 'is-block' : '',
								this.listType,
								this.limit && fileList.length < this.limit ? '' : 'is-max'
							]}
						>
							{this.listType !== 'text' ? uploadList : ''}
							{this.$slots.trigger
								? [uploadComponent, this.$slots.default]
								: uploadComponent}
							{this.$slots.tip || tip}
							{this.listType !== 'text' ? '' : uploadList}
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
