import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Room(props) {
    return (
        <div className="border-2 border-rose-400 w-full flex h-96 p-8" >
            <div className="w-1/3 border-2 border-rose-600 mr-8">
                <p>image</p>
            </div>
            <div className="w-2/3 pl-4 flex flex-col">
                <div className="flex grow flex-row">
                    <div className="basis-3/4">
                        <p className="font-bold mb-4">{props.type}</p>
                        <p>{props.capacity} Person</p>
                        <p>"room size"</p>
                        <p>{props.facility}</p>
                        
                    </div>
                    <div className="basis-1/4">     
                        <div className="mb-8">
                            <p className="font-bold uppercase mb-4">Best Price Available</p>      
                            <p className="font-bold text-2xl mb-4">IDR {props.price}</p>
                            <p>exlude taxes and fee</p>
                        </div>                
                        {/* <Router> */}
                        <Link to="/bookingform">
                            <button className="bg-mondokkiprimary-500 hover:bg-mondokkiprimary-400 text-white font-bold py-2 px-4 rounded w-40">Book Now</button>
                        </Link>
                        {/* </Router> */}
                    </div>
                </div>
                <div className="flex flex-row-reverse">
                    
                </div>
            </div>
        </div>
    )
}

export default Room