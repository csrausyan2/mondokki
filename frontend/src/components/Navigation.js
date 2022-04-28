import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navigation() {
    return (
        <Router>
            <div className="Navigation fixed bg-amber-500 w-screen z-20">
                <header className="Navigation-Header h-12 flex justify-between items-center">
                    <div className='logo w-16'>
                        <p>logo</p>
                    </div>
                    <div className='flex'>
                        <form className="">
                            <label>
                                <input className="w-60 rounded-lg" type="text" name="name" placeholder='Insert booking code'></input>
                            </label>
                        </form>
                        <Link to="/appointment">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">Make booking</button>

                        </Link>
                    </div>
                </header>
                
            </div>
        </Router>
    )
}


export default Navigation

