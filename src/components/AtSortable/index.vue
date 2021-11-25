<template>
	<div
		:id="sortableId"
		class="at-sortable"
		:class="{ 'at-sortable--disabled': disabled }"
	>
		<slot></slot>
	</div>
</template>
<script>
import Sortable from 'sortablejs';
import { generateId } from 'element-ui/src/utils/util';
import { removeClass, addClass, hasClass } from 'element-ui/src/utils/dom';

export default {
	name: 'AtSortable',
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		handle: {
			type: String,
			default: '.at-sortable__item'
		},
		animation: {
			type: Number,
			default: 150
		},
		// http://sortablejs.github.io/Sortable/#shared-lists
		group: {
			type: [String, Object]
		}
	},
	data() {
		return {
			sortableId: `sortable_${generateId()}`,
			sortable: undefined
		};
	},
	watch: {
		option() {
			this.init();
		}
	},
	computed: {
		option() {
			const that = this;
			return {
				handle: this.handle,
				disabled: this.disabled,
				animation: this.animation,
				group: this.group,
				ghostClass: 'at-sortable__item--ghost',
				chosenClass: 'at-sortable__item--chosen',
				dragClass: 'at-sortable__item--drag',
				filter: '.at-sortable__item--disabled',

				// Element is chosen
				onChoose: function(/**Event*/ evt) {
					that.updateDropActive(evt);
					// console.log('onChoose', evt);
					// evt.oldIndex; // element index within parent
				},

				setData: function(
					/** DataTransfer */ dataTransfer,
					/** HTMLElement*/ dragEl
				) {
					dataTransfer, dragEl;
					// console.log('setData', dataTransfer, dragEl);
					// dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
				},

				// Called when creating a clone of element
				onClone: function(/**Event*/ evt) {
					evt;
					// var origEl = evt.item;
					// var cloneEl = evt.clone;
					// console.log('onClone', evt);
				},
				// Element dragging started
				onStart: function(/**Event*/ evt) {
					evt;
					// console.log('onStart', evt.oldIndex);
					// evt.oldIndex; // element index within parent
				},

				// Event when you move an item in the list or between lists
				onMove: function(/**Event*/ evt, /**Event*/ originalEvent) {
					that.updateDropActive(evt);
					originalEvent;
					// // Example: https://jsbin.com/nawahef/edit?js,output
					// evt.dragged; // dragged HTMLElement
					// evt.draggedRect; // DOMRect {left, top, right, bottom}
					// evt.related; // HTMLElement on which have guided
					// evt.relatedRect; // DOMRect
					// evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
					// originalEvent.clientY; // mouse position
					// // return false; — for cancel
					// // return -1; — insert before target
					// // return 1; — insert after target
					// // return true; — keep default insertion point based on the direction
					// // return void; — keep default insertion point based on the direction
					// console.log('onMove', evt, originalEvent);
				},
				// Called when dragging element changes position
				onChange: function(/**Event*/ evt) {
					that.updateDropActive(evt);
					// evt.newIndex; // most likely why this event is used is to get the dragging element's current index
					// same properties as onEnd
					// console.log('onChange', evt);
				},

				// Element is unchosen
				onUnchoose: function(/**Event*/ evt) {
					that.updateDropActive(evt);
					// same properties as onEnd
					// console.log('onUnChoose', evt);
				},

				// Changed sorting within list
				onUpdate: function(/**Event*/ evt) {
					evt;
					// same properties as onEnd
					// console.log('onUpdate', evt);
					that.$emit('update', evt);
				},

				// Element is dropped into the list from another list
				onAdd: function(/**Event*/ evt) {
					evt;
					// same properties as onEnd
					// console.log('onAdd', evt);
					that.$emit('add', evt);
				},
				// Element is removed from the list into another list
				onRemove: function(/**Event*/ evt) {
					evt;
					// same properties as onEnd
					// console.log('onRemove', evt);
					that.$emit('remove', evt);
				},

				// Called by any change to the list (add / update / remove)
				onSort: function(/**Event*/ evt) {
					evt;
					// same properties as onEnd
					// console.log('onSort', evt);
				},

				// Element dragging ended
				onEnd: function(/**Event*/ evt) {
					that.updateDropActive(evt);
					// var itemEl = evt.item; // dragged HTMLElement
					// evt.to; // target list
					// evt.from; // previous list
					// evt.oldIndex; // element's old index within old parent
					// evt.newIndex; // element's new index within new parent
					// evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
					// evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
					// evt.clone; // the clone element
					// evt.pullMode; // when item is in another sortable: `"clone"` if cloning, `true` if moving
					// console.log('onEnd', evt);
				},

				// Attempt to drag a filtered element
				onFilter: function(/**Event*/ evt) {
					evt;
					// var itemEl = evt.item; // HTMLElement receiving the `mousedown|tapstart` event.
					// console.log('onFilter', evt);
				}
			};
		}
	},
	update() {
		this.init();
	},
	mounted() {
		this.init();
	},
	beforeDestroy() {
		this.destroy();
	},
	methods: {
		updateDropActive(event) {
			const activeClass = 'at-sortable--active';
			const sortables = document.querySelectorAll(`.${activeClass}`) || [];

			sortables.forEach(item => removeClass(item, activeClass));

			if (
				event.to.id === this.sortableId &&
				event.type !== 'end' &&
				event.type !== 'unchoose'
			) {
				if (!hasClass(event.to, activeClass)) {
					addClass(event.to, activeClass);
				}
			}
		},
		destroy() {
			if (this.sortable) {
				this.sortable.destroy();
			}
		},
		init() {
			this.destroy();
			this.sortable = Sortable.create(
				document.getElementById(this.sortableId),
				this.option
			);
		}
	}
};
</script>
