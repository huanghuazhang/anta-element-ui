import { ElTabs, TabType } from 'element-ui/types/tabs';
/** Button Component */
export type AtTabType = TabType | 'button';

export declare class AtTabs extends ElTabs {
	// @ts-ignore
	type?: AtTabType;
}
