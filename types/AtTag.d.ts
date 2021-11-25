import { ElTag } from 'element-ui/types/tag';
/** Button Component */

export type AtTagType = 'success' | 'warning' | 'danger' | 'info';
export declare class AtTag extends ElTag {
	// @ts-ignore
	type?: AtTagType;
}
