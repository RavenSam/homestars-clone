import Item from "./Item";
import { useTranslation } from "next-i18next";

import {
	Svgexport12,
	Svgexport10,
	Svgexport8,
	Svgexport6,
	Svgexport4,
	Svgexport2,
} from "@icons/index";

export default function Essential() {
  const { t } = useTranslation("essential");

	const items = [
		{ text: t("e1") , icon: Svgexport2 },
		{ text: t("e2") , icon: Svgexport4 },
		{ text: t("e3") , icon: Svgexport6 },
		{ text: t("e4") , icon: Svgexport8 },
		{ text: t("e5") , icon: Svgexport10 },
		{ text: t("e6") , icon: Svgexport12 },
	];

	return (
		<div className="px-4 py-8 w-full">
			<h2 className="text-xl md:text-2xl text-center my-4">
				{ t("etitle") }
			</h2>

			<div style={{ maxWidth: "750px" }} className="flex flex-wrap mx-auto pb-4 pt-8">
				{items.map((item) => (
					<Item key={item.text} item={item} />
				))}
			</div>

			<hr className="border-gray-300" />
		</div>
	);
}
