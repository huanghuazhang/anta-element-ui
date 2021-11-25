import { ElementUIComponent } from 'element-ui/types/component';
import { GroupOptions, SortableEvent } from 'sortablejs';
/** Button Component */
export declare class AtSortable extends ElementUIComponent {
	disabled?: boolean;
	/**
	 * .at-sortable__item
	 */
	handle?: string;
	/**
	 * 150
	 */
	animation?: number;
	group?: GroupOptions;
	update?: (event: SortableEvent) => void;
	add?: (event: SortableEvent) => void;
	remove?: (event: SortableEvent) => void;
}
