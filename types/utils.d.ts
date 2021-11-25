import { SortableEvent } from 'sortablejs';

export namespace utils {
	export function sortableUpdate(items: any[], event: SortableEvent): any[];
	export function sortableAdd(
		from: any[],
		to: any[],
		event: SortableEvent
	): any[];
	export function sortableRemove(items: any[], event: SortableEvent): any[];
}
