import { Svgexport1 } from "@icons/index";
import { useTranslation } from "next-i18next";

export default function LeftSide() {
	const { t } = useTranslation("header");

	const leftlinks = [
		{ label: t("leftlink1"), href: "#" },
		{ label: t("leftlink2"), href: "#" },
		{ label: t("leftlink3"), href: "#" },
	];

	return (
		<div className="flex items-center">
			<div className="logo mr-4">
				<Svgexport1 />
			</div>

			<ul className="hidden md:flex items-center">
				{leftlinks.map((link) => (
					<li key={link.label} className="font-semibold">
						<a className="navlink text-sm lg:text-base p-2 lg:p-4 rounded-sm capitalize" href={link.href}>{link.label}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
