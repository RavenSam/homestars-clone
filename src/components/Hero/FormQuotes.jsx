import { SearchIcon,PostalCodeIcon } from "@icons/index";
import { useTranslation } from "next-i18next";


export default function FormQuotes() {
  const { t } = useTranslation("hero");

	return (
		<div className="w-full flex flex-col md:flex-row items-stretch justify-center rounded-sm">
			<div className="flex items-center bg-white pl-4 md:w-6/12 my-1">
				<div>
					<SearchIcon />
				</div>

				<input placeholder={t("palaceholder1")} type="text" className="text-black w-full ml-2 focus:outline-none px-2 py-3" />
			</div>

			<div className="flex items-center bg-white md:w-3/12 my-1">
				<div className="px-4 md:p-0">
					<PostalCodeIcon />
				</div>

				<input
				placeholder={t("palaceholder2")}
					type="text"
					className="text-black md:ml-2 w-full focus:outline-none py-3 md:overflow-hidden"
				/>
			</div>

			<button className="bg-green-500 md:w-3/12 px-2 py-3 my-1">{t("heroButton")}</button>
		</div>
	);
}
