import { useState } from "react";

const useModal = () => {
	const [isShowing, setIsShowing] = useState(false);

	const onToggleHandler = () => {
		setIsShowing(!isShowing);
	};

	return { isShowing, onToggleHandler };
};

export default useModal;
