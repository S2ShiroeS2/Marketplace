import MenuItem from "../MenuItem";

const Menu = ({ menudata }) => {
	return (
		<div className="home__menu--group">
			{menudata.map((menu, index) => (
				<MenuItem key={index} mode={menu.mode} dataItem={menu.menuGroup} />
			))}
		</div>
	);
};

export default Menu;
