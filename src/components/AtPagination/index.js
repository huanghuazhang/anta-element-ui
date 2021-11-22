import ElPagination from 'element-ui/packages/pagination/src/pagination';
import withStaticClass from '../../utils/withStaticClass';
import ElSelect from '../AtSelect';
import ElOption from '../AtOption';
import ElInput from '../AtInput';

const AtPagination = {
	...ElPagination,
	name: 'AtPagination',
	props: {
		...ElPagination.props,
		layout: {
			type: String,
			default: 'total, sizes, prev, pager, next, jumper'
		}
	},
	components: {
		...ElPagination.components,
		Sizes: {
			...ElPagination.components.Sizes,
			components: {
				...ElPagination.components.Sizes.components,
				ElSelect,
				ElOption
			},
			render() {
				return (
					<span class="el-pagination__sizes">
						<span>，每页</span>
						<el-select
							value={this.$parent.internalPageSize}
							popperClass={this.$parent.popperClass || ''}
							on-input={this.handleChange}
							disabled={this.$parent.disabled}
						>
							{this.pageSizes.map(item => (
								<el-option value={item} label={item}></el-option>
							))}
						</el-select>
						<span>条</span>
					</span>
				);
			}
		},
		Jumper: {
			...ElPagination.components.Jumper,
			components: {
				...ElPagination.components.Jumper.components,
				ElInput
			},
			render() {
				return (
					<span class="el-pagination__jump">
						跳至
						<el-input
							class="el-pagination__editor is-in-pagination"
							min={1}
							max={this.$parent.internalPageCount}
							value={
								this.userInput !== null
									? this.userInput
									: this.$parent.internalCurrentPage
							}
							type="number"
							disabled={this.$parent.disabled}
							nativeOnKeyup={this.handleKeyup}
							onInput={this.handleInput}
							onChange={this.handleChange}
						/>
						{this.t('el.pagination.pageClassifier')}
					</span>
				);
			}
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElPagination, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtPagination.install = function(Vue) {
	Vue.component(AtPagination.name, AtPagination);
};

export default AtPagination;
