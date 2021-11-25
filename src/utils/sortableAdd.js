export default function sortableAdd(
	fromItems,
	toItems,
	{ oldIndex, newIndex }
) {
	const newFromItems = [].concat(fromItems);
	const newToItems = [].concat(toItems);

	const from = newFromItems[oldIndex];

	newToItems.splice(newIndex, 0, from);

	return newToItems;
}
