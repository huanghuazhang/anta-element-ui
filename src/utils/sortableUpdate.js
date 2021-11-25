export default function sortableUpdate(items, { oldIndex, newIndex }) {
	const newItems = [].concat(items);
	const item = newItems[oldIndex];

	if (newIndex < oldIndex) {
		newItems.splice(newIndex, 0, item);
		newItems.splice(oldIndex + 1, 1);
	} else if (newIndex > oldIndex) {
		newItems.splice(newIndex + 1, 0, item);
		newItems.splice(oldIndex, 1);
	}
	return newItems;
}
