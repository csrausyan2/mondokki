import { useEffect } from "react"
import Room from "./Room"
import axios from  "axios"

function RoomsAvailable() {

    useEffect(() => {
        
        async function getRoomsData(){
            // const response = await fetch(`http://127.0.0.1:3000/api/room/`, {
            //     method: "GET",
            //     crossDomain: true,
            //     headers: { 'Content-Type': 'application/json',
            //                 'Access-Control-Allow-Origin': 'http://127.0.0.1:3000/api/' },
            //     body: JSON.stringify
            // })

            const response = await axios.get(`http://127.0.0.1:3000/api/room/`)
        
            console.log(response)
            console.log("getRoomsData function called")
            
        }
        getRoomsData()

    }, [])

    return (
        <div className="h-full justify-items-center grid grid-col-1">
            <div className="w-1/3  grid grid-col-1 gap-6 py-12">
                <Room />
                <Room />
                <Room />
            </div>
        </div>
    )
}

export default RoomsAvailable