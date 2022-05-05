import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Room(props) {
    return (
        <div className="border-2 border-rose-400 w-full flex h-64 p-8" >
            <div className="w-1/3 border-2 border-rose-600">
                <p>image</p>
            </div>
            <div className="w-2/3 pl-4 flex flex-col">
                <div className="grow">
                    <p>type</p>
                    <p>capacity</p>
                    <p>facility</p>
                    <p>price</p>
                </div>
                <div className="flex flex-row-reverse">
                    <Router>
                        <Link to="/ilang">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">Select room</button>
                        </Link>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default Room