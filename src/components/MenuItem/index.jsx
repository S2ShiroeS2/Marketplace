import { ICON_TYPE } from "../../constants";
import useModal from "../../hooks/useModal";
import MenuIcon from "../MenuIcon";
import MenuModal from "../MenuModal";

/**
 *
 * @prop {string} icons - List icon for each menu group.
 * @prop {string} label - Label of menu group
 * @prop {string} mode - mode state: 'square' or 'circle' for icon and menu style
 */
const SquareItem = ({ icons, label, mode }) => {
	return (
		<>
			<div className="group__wrapper">
				{icons.map((icon, index) => (
					<MenuIcon key={index} icon={icon.component} mode={mode} />
				))}
			</div>
			<p>{label}</p>
		</>
	);
};

/**
 *
 * @prop {string} icons - List icon for each menu group.
 * @prop {string} label - Label of menu group
 * @prop {string} mode - mode state: 'square' or 'circle' for icon and menu style
 */
const CircleItem = ({ icons, label, mode }) => {
	return (
		<>
			<div className="group-circle__item">
				<div className="group-circle__item--wrapper">
					{icons.map((icon, index) => (
						<MenuIcon key={index} icon={icon} mode={mode} />
					))}
				</div>
			</div>
			<p>{label}</p>
		</>
	);
};

/**
 *
 * @prop {string} mode - Mode of icon: square or circle.
 * @prop {object} dataItem - Data to render.
 */
function MenuItem({ mode, dataItem }) {
	const { icons, label } = dataItem;
	const { isShowing, onToggleHandler } = useModal();

	return (
		<>
			<div
				className={`home__menu--group-${mode}`}
				onClick={mode === ICON_TYPE.SQUARE ? onToggleHandler : undefined}
			>
				{mode === ICON_TYPE.SQUARE ? (
					<SquareItem icons={icons} label={label} mode={mode} />
				) : (
					<CircleItem icons={icons} label={label} mode={mode} />
				)}
			</div>
			<MenuModal
				isShowing={isShowing}
				hide={onToggleHandler}
				dataModal={icons}
				label={label}
				mode={mode}
			/>
		</>
	);
}

export default MenuItem;
