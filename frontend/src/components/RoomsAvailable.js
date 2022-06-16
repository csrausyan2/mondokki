import { useEffect, useState } from "react"
import Room from "./Room"
import axios from  "axios"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
        <div className="rooms-available h-full justify-items-center grid grid-col-2 py-32">
            <div className="grid gap-6 py-12 justify-items-center w-3/4">
                <div className="border-2 border-rose-400 w-2/3 flex h-full p-8 mb-4 flex flex-row max-w-5xl gap-4" >
                    <label className="block">
                        <span class="text-gray-700">Check In Date</span>
                        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} class="mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span class="text-gray-700">Check Out Date</span>
                        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} class="mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span class="text-gray-700">Adult</span>
                        <input type="number" value={adult} onChange={(e) => setAdult(e.target.value)} class="mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="block">
                        <span class="text-gray-700">Child</span>
                        <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} class="mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  " />
                    </label>
                    <label className="block flex items-center">
                        {/* <Router> */}
                            <Link to="/roomsavailable">
                                <button className="bg-mondokkiprimary-500 hover:bg-mondokkiprimary-400 text-white font-bold py-2 px-4 rounded w-40">Check Rates</button>
                            </Link>
                        {/* </Router> */}
                    </label>
                </div>
                <div className="w-full grid grid-col-1 gap-6 py-12 max-w-7xl">
                    {rooms.map((item, index) => {
                        return <Room key={index} type={item.Type} capacity={item.Capacity} facility={item.Facility} price={item.Price}></Room>
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default RoomsAvailable