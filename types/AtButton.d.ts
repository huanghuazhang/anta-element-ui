import {
	ElementUIComponent,
	ElementUIComponentSize
} from '../node_modules/element-ui/types/component';

/** Button type */
export type ButtonType =
	| 'primary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'text';

/** Same as native button's type */
export type ButtonNativeType = 'button' | 'submit' | 'reset' | 'menu';

/** Button Component */
export declare class AtButton extends ElementUIComponent {
	/** Button size */
	size: ElementUIComponentSize;

	/** Button type */
	type: ButtonType;

	/** Determine whether it's a plain button */
	plain: boolean;

	/** Determine whether it's a round button */
	round: boolean;

	/** 是否正方形，等距padding */
	square: boolean;

	/** 是否display:block */
	block: boolean;

	/** Determine whether it's loading */
	loading: boolean;

	/** Disable the button */
	disabled: boolean;

	/** Button icon, accepts an icon name of Element icon component */
	icon: string;

	/** Same as native button's autofocus */
	autofocus: boolean;

	/** Same as native button's type */
	nativeType: ButtonNativeType;
}
