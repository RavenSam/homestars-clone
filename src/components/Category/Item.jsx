

export default function Item({item}) {
	return (
		<>
		<a href="#" style={{height:"120px"}} className="item w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex flex-col items-center justify-center">
			<div className="">
				<item.icon/>
			</div>

			<p className="p-3 text-gray-800 text-center">{item.text}</p>
		</a>

		<style>{`
			.item:hover p{
				text-decoration:underline;
				color:#177aa5;
			}
			`}</style>
		</>

	);
}
