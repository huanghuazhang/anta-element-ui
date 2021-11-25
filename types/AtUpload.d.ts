import { ElUpload, ListType } from 'element-ui/types/upload';
/** Button Component */
export declare class AtUpload extends ElUpload {
	/** 是否display:block */
	block?: boolean;
 /**
	* 限制文件大小 单位 KB
  */
	sizeLimit?: number;
	// @ts-ignore
	listType?: ListType | 'list';
}
