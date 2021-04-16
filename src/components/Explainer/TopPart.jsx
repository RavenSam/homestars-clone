import { Svgexport30, Svgexport28, Svgexport26 } from "@icons/index";
import { useTranslation } from "next-i18next";

export default function TopPart() {
  const { t } = useTranslation("explainer");

	return (
		<div style={{ minHeight: "650px" }} className="flex flex-wrap">
			<div className="w-full h-full lg:w-1/2">
				<img
					className="w-full"
					style={{ maxWidth: "650px" }}
					src="/images/ex1.png"
					alt="sp or inbox review"
				/>
			</div>

			<div className="w-full flex flex-col justify-center p-4 lg:pl-20 lg:w-1/2">
				<h2 className="text-xl md:text-3xl font-semibold mb-4">{ t("extop-title") }</h2>
				<p className="font-semibold text-base md:text-xl">
					{ t("extop-sub") }
				</p>

				<div className="">
					<div className="flex items-center my-2">
						<div className="m-3">
							<Svgexport26 />
						</div>

						<p className="md:text-xl">
							{ t("extop-1") }
						</p>
					</div>

					<div className="flex items-center my-2">
						<div className="m-3">
							<Svgexport28 />
						</div>

						<p className="md:text-xl">
							{ t("extop-2") }
						</p>
					</div>

					<div className="flex items-center my-2">
						<div className="m-3">
							<Svgexport30 />
						</div>

						<p className="md:text-xl">
							{ t("extop-3") }
						<br/>
						<a style={{color:"#177aa5"}} href="#" className="hover:underline">{ t("extop-link") }</a>
						</p>
						
					</div>
				</div>
			</div>
		</div>
	);
}
