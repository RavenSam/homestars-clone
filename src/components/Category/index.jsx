import Item from "./Item";
import {
	Svgexport24,
	Svgexport22,
	Svgexport20,
	Svgexport18,
	Svgexport16,
	Svgexport14,
} from "@icons/index";
import { useTranslation } from "next-i18next";

export default function Essential() {
	const { t } = useTranslation("category");

	const items = [
		{ text: t("c1"), icon: Svgexport14 },
		{ text: t("c2"), icon: Svgexport16 },
		{ text: t("c3"), icon: Svgexport18 },
		{ text: t("c4"), icon: Svgexport20 },
		{ text: t("c5"), icon: Svgexport22 },
		{ text: t("c6"), icon: Svgexport24 },
	];

	return (
		<div className="p-4 w-full">
			<h2 className="text-2xl md:text-3xl font-semibold text-center">{t("ctitle")}</h2>
			<p className="text-center opacity-80 my-4">{t("cp")}</p>

			<hr style={{ border: "1px solid #27A9E1", width: "55px", margin: ".5rem auto" }} />

			<h3 className="text-xl font-semibold text-center capitalize mt-6 opacity-90">
				{t("csub")}
			</h3>

			<div style={{ maxWidth: "750px" }} className="flex flex-wrap mx-auto pb-4 pt-8">
				{items.map((item) => (
					<Item key={item.text} item={item} />
				))}
			</div>
		</div>
	);
}
