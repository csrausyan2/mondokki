import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function BookingForm() {
    return(
        <div className="bg-stone-500 grid justify-items-center py-12">
            <h1>booking form</h1>
            <form className="w-1/3 grid grid-col-1 gap-6 ">
                <label className="block">
                    <span class="text-gray-700">Full name</span>
                    <input
                    type="text"
                    className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    "
                    placeholder=""
                    />
            </label>
            <label className="block">
                    <span class="text-gray-700">Identification Number</span>
                    <input
                    type="text"
                    className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    "
                    placeholder=""
                    />
            </label>
            <label className="grid grid-cols-2 gap-6">
                
                <label className="block">
                    <span class="text-gray-700">Phone Number</span>
                    <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    "
                    placeholder=""
                    />
                </label>
                <label className="block">
                    <span class="text-gray-700">Email</span>
                    <input
                    type="text"
                    className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    "
                    placeholder=""
                />
            </label>
            
            </label>
            <div className="flex flex-row-reverse">
                <Router>
                    <Link to="/pesan">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">Make booking</button>
                    </Link>
                </Router>
            </div>
            </form>
            
        </div>
    )
}

export default BookingForm