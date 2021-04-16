import { useState } from "react";
import Link from "next/link";
import { MenuOutline, XOutline, Svgexport1 } from "@icons/index";
import { useTranslation } from "next-i18next";
import DropDown from "@components/Sections/DropDown";

export default function MobileMenu() {
	const { t } = useTranslation("header");
	const [open, setOpen] = useState(false);

	const menu = [
		{ label: t("leftlink1"), href: "#" },
		{ label: t("leftlink2"), href: "#" },
		{ label: t("leftlink3"), href: "#" },
		{ label: t("rightlink1"), href: "#" },
		{ label: t("rightlink2"), href: "#" },
	];

	const menuClasses = open
		? " duration-200 ease-out opacity-100 scale-100"
		: " duration-100 ease-in opacity-0 scale-95 -z-1";
	return (
		<>
			{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                MOBILE MENU
        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

			<button
				onClick={() => setOpen(true)}
				type="button"
				aria-label="Open Menu"
				className="bg-white rounded-sm z-10 p-2 block text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none "
				aria-expanded="false"
			>
				<MenuOutline />
			</button>

			{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                MOBILE MENU
        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

			<div
				className={`${menuClasses} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-1`}
			>
				<div className="rounded-sm shadow-md ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
					<div className="pt-5 pb-6 px-5">
						<div className="flex items-center justify-between">
							<div className="">
								<Svgexport1 />
							</div>
							<div className="-mr-2">
								<button
									onClick={() => setOpen(false)}
									aria-label="Close Menu"
									type="button"
									className="bg-white rounded-sm p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none "
								>
									<XOutline />
								</button>
							</div>
						</div>
						<div className="mt-6">
							<nav className="grid gap-y-8">
								{menu.map((item) => (
									<Link href={item.href} key={item.label}>
										<a className="-m-3 p-3 flex items-center rounded-sm hover:bg-gray-100">
											<span className="ml-3 text-base font-medium text-gray-900">
												{item.label}
											</span>
										</a>
									</Link>
								))}
								<div className="-m-3 p-3 flex items-center rounded-sm hover:bg-gray-100">
									<DropDown className="ml-3 text-base font-medium text-gray-900 uppercase" />
								</div>
							</nav>
						</div>
					</div>
					<div className="py-6 px-5">
						<a
							href="#"
							style={{ background: "#FAD04F", width:"fit-content" }}
							className="text-base p-4 py-4 mx-auto block text-black opacity-90 hover:opacity-100 rounded-sm capitalize"
						>
							{t("navButton")}
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
