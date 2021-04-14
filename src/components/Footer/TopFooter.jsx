import { Svgexport78 } from "@icons/index";
import { useTranslation } from "next-i18next";


export default function TopFooter() {
  const { t } = useTranslation("footer");

	return (
		<div className="flex flex-col sm:flex-row items-center justify-between p-8">
			<div className="flex items-center flex-wrap justify-center">
			<div className="flex items-center ">
			<div className="">
				<Svgexport78 />
			</div>

				<p className="m-3 sm:text-xl">{t("ft-leftP")}</p>
			</div>

				<a href="#" className="bg-green-500 text-sm md:text-base px-3 py-2 rounded-sm">
					{t("ft-leftLink")}
				</a>
			</div>

			<div className="">
				<p className="m-3 sm:text-xl">
					{t("ft-rightP")}{" "}
					<a className="text-blue-500" href="#">
						{t("ft-rightLink")}
					</a>
				</p>
			</div>
		</div>
	);
}
