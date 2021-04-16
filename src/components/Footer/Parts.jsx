import { Svgexport88, Svgexport86, Svgexport84, Svgexport82, Svgexport80 } from "@icons/index";
import { useTranslation } from "next-i18next";
import DropDown from "@components/Sections/DropDown"

export const Part1 = () => {
	const { t } = useTranslation("footer");

	const link1 = [
		{ label: t("fb-1-l1"), href: "#" },
		{ label: t("fb-1-l2"), href: "#" },
		{ label: t("fb-1-l3"), href: "#" },
		{ label: t("fb-1-l4"), href: "#" },
		{ label: t("fb-1-l5"), href: "#" },
		{ label: t("fb-1-l6"), href: "#" },
		{ label: t("fb-1-l7"), href: "#" },
		{ label: t("fb-1-l8"), href: "#" },
		{ label: t("fb-1-l9"), href: "#" },
		{ label: t("fb-1-l10"), href: "#" },
	];

	return (
		<div className="my-1 px-1 w-full overflow-hidden md:w-1/2 lg:w-1/4 p-2">
			<h2 className="text-base font-semibold">{t("fb-1-title")}</h2>

			<ul>
				{link1.map((link) => (
					<li key={link.label}>
						<a href={link.href} className="text-sm hover:underline">
							{link.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export const Part2 = () => {
	const { t } = useTranslation("footer");

	const link2 = [
		{ label: t("fb-2-l1"), href: "#" },
		{ label: t("fb-2-l2"), href: "#" },
		{ label: t("fb-2-l3"), href: "#" },
		{ label: t("fb-2-l4"), href: "#" },
		{ label: t("fb-2-l5"), href: "#" },
		{ label: t("fb-2-l6"), href: "#" },
		{ label: t("fb-2-l7"), href: "#" },
	];

	return (
		<div className="my-1 px-1 w-full overflow-hidden md:w-1/2 lg:w-1/4 p-2">
			<h2 className="text-base font-semibold">{t("fb-2-title")}</h2>

			<ul>
				{link2.map((link) => (
					<li key={link.label}>
						<a href={link.href} className="text-sm hover:underline">
							{link.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export const Part3 = () => {
	const { t } = useTranslation("footer");

	const link3 = [
		{ label: t("fb-3-l1"), href: "#" },
		{ label: t("fb-3-l2"), href: "#" },
		{ label: t("fb-3-l3"), href: "#" },
		{ label: t("fb-3-l4"), href: "#" },
		{ label: t("fb-3-l5"), href: "#" },
		{ label: t("fb-3-l6"), href: "#" },
		{ label: t("fb-3-l7"), href: "#" },
		{ label: t("fb-3-l8"), href: "#" },
	];

	return (
		<div className="my-1 px-1 w-full overflow-hidden md:w-1/2 lg:w-1/4 p-2">
			<h2 className="text-base font-semibold">{t("fb-3-title")}</h2>

			<ul>
				{link3.map((link) => (
					<li key={link.label}>
						<a href={link.href} className="text-sm hover:underline">
							{link.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export const Part4 = () => {
	const { t } = useTranslation("footer");

	return (
		<div className="my-1 px-1 w-full flex flex-col overflow-hidden md:w-1/2 lg:w-1/4 p-2">
			<div className="flex items-center">
				<a href="#" className="m-1">
					<Svgexport88 />
				</a>
				<a href="#" className="m-1">
					<Svgexport86 />
				</a>
				<a href="#" className="m-1">
					<Svgexport84 />
				</a>
				<a href="#" className="m-1">
					<Svgexport82 />
				</a>
				<a href="#" className="m-1">
					<Svgexport80 />
				</a>
			</div>

			<div className="mt-4">

			<DropDown className="opacity-80 uppercase mb-4 hover:opacity-100 rounded-sm px-4 border border-gray-300 py-2 text-sm font-medium text-gray-200" />
			</div>

			<a href="/" className="mt-auto h-8">
				<img className="h-full" src="/images/footerImg.png" alt="Logo" />
			</a>

			<p className="text-center text-sm mt-4 px-5">{t("fb-4-p")}</p>
		</div>
	);
};
