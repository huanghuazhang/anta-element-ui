export default function withComputed(computed) {
	return {
		...computed,
		triggerClass() {
			return (
				this.prefixIcon ||
				(this.type.indexOf('time') !== -1
					? 'at-icon-time'
					: 'at-icon-calendar-o')
			);
		}
	};
}
