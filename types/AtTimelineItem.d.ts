import { ElTimelineItem } from 'element-ui/types/timeline-item';

export type AtTimelineItemPlacement = 'top' | 'bottom' | 'left' | 'right';

/** Button Component */
export declare class AtTimelineItem extends ElTimelineItem {
	// @ts-ignore
	placement: AtTimelineItemPlacement;
}
