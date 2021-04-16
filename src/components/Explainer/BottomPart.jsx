import { Svgexport36, Svgexport34, Svgexport32 } from "@icons/index";
import { useTranslation } from "next-i18next";

export default function BottomPart() {
  const { t } = useTranslation("explainer");

	return (
		<div style={{ minHeight: "650px" }} className="flex flex-wrap-reverse">
			<div className="w-full flex flex-col justify-center p-4 lg:pr-20 lg:w-1/2">
				<h2 className="text-xl md:text-3xl font-semibold mb-4">{ t("exb-title") }</h2>
				<p className="font-semibold text-base md:text-xl">
					{ t("exb-sub") }
				</p>

				<div className="">
					<div className="flex items-center my-2">
						<div className="m-3">
							<Svgexport32 />
						</div>

						<p className="md:text-xl">
							{ t("exb-1") }
						</p>
					</div>

					<div className="flex items-center my-2">
						<div className="m-3">
							<Svgexport34 />
						</div>

						<p className="md:text-xl">{ t("exb-2") }</p>
					</div>

					<div className="flex items-center my-2">
						<div className="m-3">
							<Svgexport36 />
						</div>

						<p className="md:text-xl">{ t("exb-3") }</p>
					</div>
				</div>
			</div>

			<div className="w-full h-full lg:w-1/2">
				<img
					className="w-full"
					style={{ maxWidth: "650px" }}
					src="/images/ex2.png"
					alt="sp or inbox review"
				/>
			</div>
		</div>
	);
}
