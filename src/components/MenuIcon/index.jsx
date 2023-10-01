import { ICON_TYPE } from "../../constants";

const MenuIcon = ({ icon, mode }) => {
	return (
		<>
			{mode === ICON_TYPE.SQUARE ? (
				<div className="menu-item">
					<div className="menu-item__wrapper">{icon}</div>
				</div>
			) : (
				<>{icon}</>
			)}
		</>
	);
};

export default MenuIcon;
