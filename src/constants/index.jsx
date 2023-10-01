import {
	Additem,
	Box,
	Building,
	ChartSquare,
	Data,
	FavoriteChart,
	InfoCircle,
	LoginCurve,
	LogoutCurve,
	People,
	ShoppingCart,
	TicketDiscount,
} from "iconsax-react";

export const DATA_RENDER_STRUCTURE = {
	groupSquare: [
		// Menu component
		{
			// List MenuItem component
			menuGroup: {
				icons: [
					{
						component: <Box size="32" color="#fff" variant="Bold" />,
						label: "Product Category",
					},
					{
						component: <Building size="32" color="#fff" variant="Bold" />,
						label: "Company",
					},
				],
				label: "Explore",
			},
			mode: "square",
		},
		{
			// List MenuItem component
			menuGroup: {
				icons: [
					{
						component: <Additem size="32" color="#fff" variant="Bold" />,
						label: "Add Subscription",
					},
					{
						component: <InfoCircle size="32" color="#fff" variant="Bold" />,
						label: "Public Information",
					},
					{
						component: <FavoriteChart size="32" color="#fff" variant="Bold" />,
						label: "Business Information",
					},
					{
						component: <People size="32" color="#fff" variant="Bold" />,
						label: "Connection",
					},
				],
				label: "Profiles",
			},
			mode: "square",
		},
		{
			// List MenuItem component
			menuGroup: {
				icons: [
					{
						component: <ShoppingCart size="32" color="#fff" variant="Bold" />,
						label: "Online shop",
					},
					{
						component: <ChartSquare size="32" color="#fff" variant="Bold" />,
						label: "Product Dashboard",
					},
					{
						component: <TicketDiscount size="32" color="#fff" variant="Bold" />,
						label: "Offer Dashboard",
					},
				],
				label: "Store",
			},
			mode: "square",
		},
	],
	groupCircle: [
		// Menu component
		{
			// List MenuItem component
			menuGroup: {
				icons: [<Data size="80" color="#ffffff" variant="Bold" />],
				label: "Developer",
			},
			mode: "circle",
		},
		{
			// List MenuItem component
			menuGroup: {
				icons: [<LoginCurve size="80" color="#ffffff" variant="Bold" />],
				label: "Message",
			},
			mode: "circle",
		},
		{
			// List MenuItem component
			menuGroup: {
				icons: [<LogoutCurve size="80" color="#ffffff" variant="Bold" />],
				label: "Log out",
			},
			mode: "circle",
		},
	],
};

export const ICON_TYPE = {
	SQUARE: "square",
	CIRCLE: "circle",
};
