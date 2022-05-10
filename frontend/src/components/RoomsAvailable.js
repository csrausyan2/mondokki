import { useEffect, useState } from "react"
import Room from "./Room"
import axios from  "axios"

function RoomsAvailable() {

    const [rooms, setRooms] = useState([])

    useEffect(() => {

        async function getRoomsData(){
            
            await axios.get(`http://127.0.0.1:3000/api/room/`).then(res=>{
                const roomsdata = res.data.data
                // console.log(roomsdata)
                roomsdata.forEach(element => {
                    console.log(element.Capacity)
                });
                console.log("roomdata")
                setRooms(roomsdata)
            }).catch(err=>{
                console.log(err)
            })

            

        }
        // console.log(rooms)
        
        getRoomsData()

    }, [])


    return (
        <div className="h-full justify-items-center grid grid-col-1">
            <div className="w-1/3  grid grid-col-1 gap-6 py-12">
                {rooms.map((item, index) => {
                    return <Room key={index} type={item.Type} capacity={item.Capacity} facility={item.Facility} price={item.Price}></Room>
                })}
            </div>
        </div>
    )
}

export default RoomsAvailable