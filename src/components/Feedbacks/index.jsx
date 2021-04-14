import Card from "./Card";
import { useTranslation } from "next-i18next";

export default function Feedbacks() {
  const { t } = useTranslation("feedbacks");

	const cardsContent = [
		{
			img: "/images/1.png",
			text: t("feed-1"),
			name: "Chad McPherson",
			location: "Calgary, Alberta",
		},
		{
			img: "/images/2.png",
			text: t("feed-2"),
			name: "Ed Strickland",
			location: "Calgary, Alberta",
		},
		{
			img: "/images/3.png",
			text: t("feed-3"),
			name: "Carrol Drew",
			location: "Toronto, Ontario",
		},
		{
			img: "/images/4.png",
			text: t("feed-4"),
			name: "Colleen McDougall",
			location: "Toronto, Ontario",
		},
	];

	return (
		<div className="flex flex-col items-center justify-start w-full">
			<img src="/images/logolove.png" alt="logo" className="mb-20" />

			<div className="flex flex-wrap items-center justify-center">
				{cardsContent.map((content) => (
					<Card key={content.name} content={content} />
				))}
			</div>
		</div>
	);
}
