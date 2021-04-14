import FormQuotes from "./FormQuotes";
import { useTranslation } from "next-i18next";


export default function Hero() {
  const { t } = useTranslation("hero");

	return (
		<div
			className="bg-cover bg-no-repeat bg-center w-full"
			style={{ backgroundImage: "url(/images/banner.jpg)", height: "470px" }}
		>
			<div className="w-full h-full flex items-center justify-center text-white">
				<div className="flex flex-col items-start justify-center max-w-xl p-4">
					<h1 className="text-2xl md:text-3xl mb-4 ">
						{t("heroh1")}
					</h1>

					<p className="text-base md:text-xl mb-6">{t("herop")}</p>

					<FormQuotes />
				</div>
			</div>
		</div>
	);
}
