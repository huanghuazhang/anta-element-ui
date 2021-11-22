import ElTableBody from 'element-ui/packages/table/src/table-body';
import withStaticClass from '../../utils/withStaticClass';
import ElCheckbox from '../AtCheckbox';

const AtTableBody = {
	...ElTableBody,
	name: 'AtTableBody',
	components: {
		...ElTableBody.components,
		ElCheckbox
	},
	methods: {
		...ElTableBody.methods,
		rowRender(row, $index, treeRowData) {
			const { treeIndent, columns, firstDefaultColumnIndex } = this;
			const columnsHidden = columns.map((column, index) =>
				this.isColumnHidden(index)
			);
			const rowClasses = this.getRowClass(row, $index);
			let display = true;
			if (treeRowData) {
				rowClasses.push('el-table__row--level-' + treeRowData.level);
				display = treeRowData.display;
			}
			// 指令 v-show 会覆盖 row-style 中 display
			// 使用 :style 代替 v-show https://github.com/ElemeFE/element/issues/16995
			let displayStyle = display
				? null
				: {
						display: 'none'
				  };

			// 判断 select 改动
			if (this.store.isSelected(row)) {
				rowClasses.push('el-table__row--selected');
			}
			return (
				<tr
					style={[displayStyle, this.getRowStyle(row, $index)]}
					class={rowClasses}
					key={this.getKeyOfRow(row, $index)}
					on-dblclick={$event => this.handleDoubleClick($event, row)}
					on-click={$event => this.handleClick($event, row)}
					on-contextmenu={$event => this.handleContextMenu($event, row)}
					// eslint-disable-next-line no-unused-vars
					on-mouseenter={_ => this.handleMouseEnter($index)}
					on-mouseleave={this.handleMouseLeave}
				>
					{columns.map((column, cellIndex) => {
						const { rowspan, colspan } = this.getSpan(
							row,
							column,
							$index,
							cellIndex
						);
						if (!rowspan || !colspan) {
							return null;
						}
						const columnData = { ...column };
						columnData.realWidth = this.getColspanRealWidth(
							columns,
							colspan,
							cellIndex
						);
						const data = {
							store: this.store,
							_self: this.context || this.table.$vnode.context,
							column: columnData,
							row,
							$index
						};
						if (cellIndex === firstDefaultColumnIndex && treeRowData) {
							data.treeNode = {
								indent: treeRowData.level * treeIndent,
								level: treeRowData.level
							};
							if (typeof treeRowData.expanded === 'boolean') {
								data.treeNode.expanded = treeRowData.expanded;
								// 表明是懒加载
								if ('loading' in treeRowData) {
									data.treeNode.loading = treeRowData.loading;
								}
								if ('noLazyChildren' in treeRowData) {
									data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
								}
							}
						}
						return (
							<td
								style={this.getCellStyle($index, cellIndex, row, column)}
								class={this.getCellClass($index, cellIndex, row, column)}
								rowspan={rowspan}
								colspan={colspan}
								on-mouseenter={$event => this.handleCellMouseEnter($event, row)}
								on-mouseleave={this.handleCellMouseLeave}
							>
								{column.renderCell.call(
									this._renderProxy,
									this.$createElement,
									data,
									columnsHidden[cellIndex]
								)}
							</td>
						);
					})}
				</tr>
			);
		}
	},
	render(...args) {
		const element = withStaticClass(this, ElTableBody, ...args);

		return element;
	}
};

/* istanbul ignore next */
AtTableBody.install = function(Vue) {
	Vue.component(AtTableBody.name, AtTableBody);
};

export default AtTableBody;
