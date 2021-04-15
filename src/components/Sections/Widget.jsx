import{ Message }from "@icons/index"

export default function Widget (){
	return(

		<button style={{background:"#1d9cd3"}} aria-label="open chat" className="fixed block right-6 bottom-6 p-4 rounded-md focus:outline-none" >
			<Message/>
		</button>

	)
}
