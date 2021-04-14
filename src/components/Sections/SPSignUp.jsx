import { useTranslation } from "next-i18next";

export default function SPSignUp() {
	const { t } = useTranslation("spsignup");

	return (
		<div
			style={{ height: "185px", background: "url(/images/sp.png)" }}
			className="w-full text-white flex flex-col items-center justify-evenly p-4"
		>
			<p className="text-3xl capitalize">{t("sp-title")}</p>

			<p className="text-xl">{t("sp-p")}</p>

			<a
				href="#"
				style={{ background: "#FAD04F", width: "212px" }}
				className="text-center uppercase text-black py-3 font-semibold rounded-sm"
			>
				{t("sp-btn")}
			</a>
		</div>
	);
}
