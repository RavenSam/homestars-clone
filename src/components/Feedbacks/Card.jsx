import { Svgexport38 } from "@icons/index";

export default function Card({ content }) {
	return (
		<div
			style={{
				width: "453px",
				height: "316px",
				boxShadow: " 0 0 3px 1px rgb(6 44 82 / 10%), 0 2px 16px 0 rgb(33 43 54 / 8%)",
				borderRadius: "8px",
			}}
			className="w-full lg:w-1/2 mb-24 md:mx-5 flex flex-col items-center"
		>
			<img src={content.img} alt="Avatar" style={{ marginTop: "-41px" }} />

			<div className="text-center h-3/5 px-6 py-4">
				<p>"{content.text}"</p>
			</div>

			<div className="text-white flex flex-col items-center justify-center bg-blue-500 h-2/5 w-full">
				<div className="flex items-center justify-center mb-2">
					<Svgexport38 />
					<Svgexport38 />
					<Svgexport38 />
					<Svgexport38 />
					<Svgexport38 />
				</div>

				<p className="text-xl capitalize">{content.name}</p>

				<p className="capitalize">{content.location}</p>
			</div>
		</div>
	);
}
