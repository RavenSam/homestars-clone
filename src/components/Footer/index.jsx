import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";

export default function Footer() {
	return (
		<footer style={{ background: "#232F3A" }} className="w-full text-white">
			<div style={{ maxWidth: "1260px" }} className="mx-auto">
				<TopFooter />

				<hr className="mb-2" />

				<div className="p-4">
					<BottomFooter />
				</div>
			</div>
		</footer>
	);
}
