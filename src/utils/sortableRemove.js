export default function sortableRemove(items, { oldIndex }) {
	const newItems = [].concat(items);

	newItems.splice(oldIndex, 1);

	return newItems;
}
