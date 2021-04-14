import { useTranslation } from "next-i18next";


export default function RightSide() {
	const { t } = useTranslation("header");

	const rightlinks = [
		{ label: t("rightlink1"), href: "#" },
		{ label: t("rightlink2"), href: "#" },
	];

	return (
		<div className="flex items-center">
			<ul className="flex items-center">
				{rightlinks.map((link) => (
					<li  key={link.label} className="font-semibold">
						<a className="text-sm lg:text-base p-2 lg:p-4 navlink rounded-sm capitalize" href={link.href}>
							{link.label}
						</a>
					</li>
				))}

				<li className="font-semibold ml-4">
						<a href="#" style={{background:"#FAD04F"}} className="text-sm lg:text-base p-2 lg:p-4 py-4 text-black opacity-90 hover:opacity-100 rounded-sm capitalize" >
							{t("navButton")}
						</a>
					</li>
			</ul>
		</div>
	);
}
