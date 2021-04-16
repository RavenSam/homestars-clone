// Parts
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Header() {
	return (
		<>
			<div className="flex items-center justify-between text-white p-5 absolute top-0 left-0 w-full">

				<LeftSide />

				<RightSide />
			</div>

			<style>{`
				.navlink:hover{
					background-color: rgba(0,0,0,0.2);
					border-radius: 4px;
				}

				.-z-1{
					z-index:-1;
				}
				`}</style>
		</>
	);
}
