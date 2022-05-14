import { useEffect, useState } from "react"
import Room from "./Room"
import axios from  "axios"

function RoomsAvailable() {

    const [rooms, setRooms] = useState([])
    const [checkIn, setCheckIn] = useState(0)
    const [checkOut, setCheckOut] = useState(0)
    const [adult, setAdult] = useState(0)
    const [children, setChildren] = useState(0)

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
                <div className="border-2 border-rose-400 w-full flex h-full p-8 mb-4 flex flex-row" >
                    <label className="block">
                        <span class="text-gray-700">Check In Date</span>
                        <input type="date" class="mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span class="text-gray-700">Check Out Date</span>
                        <input type="date" class="mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span class="text-gray-700">Adult</span>
                        <input type="number" class="mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span class="text-gray-700">Child</span>
                        <input type="number" class="mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  " />
                    </label>
                </div>
                {rooms.map((item, index) => {
                    return <Room key={index} type={item.Type} capacity={item.Capacity} facility={item.Facility} price={item.Price}></Room>
                })}
            </div>
        </div>
    )
}

export default RoomsAvailable