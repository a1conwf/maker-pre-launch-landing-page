import passionsImg from "../assets/svg/illustration-passions.svg";
import freedomImg from "../assets/svg/illustration-financial-freedom.svg";
import lifestyleImg from "../assets/svg/illustration-lifestyle.svg";
import workImg from "../assets/svg/illustration-work-anywhere.svg";
import iconFree from "../assets/svg/icon-free.svg";
import iconPaid from "../assets/svg/icon-paid.svg";

export const featuresData = [
	{
		id: "1",
		img: passionsImg,
		title: "Indulge your passions",
		text: "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
	},

	{
		id: "2",
		img: freedomImg,
		title: "Gain financial freedom",
		text: "Start making money work for you. There’s nothing quite like earning while you sleep. ",
	},

	{
		id: "3",
		img: lifestyleImg,
		title: "Choose your lifestyle",
		text: "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.",
	},

	{
		id: "4",
		img: workImg,
		title: "Work from anywhere",
		text: "Selling online means not being pinned down. Want to work AND travel? Go for it!",
	},
];

export const pricingPlansData = [
	{
		id: "1",
		img: iconFree,
		ctaTitle: "Dip your toe",
		text: "Just getting started? No problem at all! Our free plan will take you a long way.",
		price: "Free",
		features: ["Unlimited products", "Basic analytics", "Limited marketplace exposure", "10% fee per transaction"],
	},

	{
		id: "2",
		img: iconPaid,
		ctaTitle: "Dive right in",
		text: "Ready for the big time? Our paid plan will help you take your business to the next level.",
		price: "$25.00 ",
		period: " / month",
		features: ["Custom domain", "Advanced analytics and reports", "High marketplace visibility", "5% fee per transaction"],
	},
];
