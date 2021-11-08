import AtButton from '../AtButton';
import AtInput from '../AtInput';

const withComponents = components => {
	return {
		...components,
		ElInput: AtInput,
		ElButton: AtButton
	};
};

export default withComponents;
