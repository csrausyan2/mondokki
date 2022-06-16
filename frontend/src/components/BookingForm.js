import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function BookingForm() {
    return(
        <div className="bg-stone-200 grid justify-items-center py-32">
            <h1>Your Information</h1>
            <form className="w-1/3 grid grid-col-1 gap-6 ">
                <label className="grid grid-cols-4 gap-6">

                    <label className="block">
                        <span class="text-gray-700">Title</span>
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
                    <label className="block col-span-3">
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
                </label>
                <label className="grid grid-cols-4 gap-6">

                    <label className="block">
                        <span class="text-gray-700">Country Code</span>
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
                    <label className="block col-span-3">
                        <span class="text-gray-700">Phone Number</span>
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
                <label className="grid grid-cols-2 gap-6">
                    <label className="block">
                        <span class="text-gray-700">National Identifier Number</span>
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
                    <div></div>
                    {/* <label className="block">
                        <span class="text-gray-700">Coupon Code</span>
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
                    </label> */}
                
                </label>
            
            </form>
            
            <h1>Your Booking Summary</h1>
            <div className="flex flex-col gap-8 my-4">
                <div className="grid grid-cols-4 gap-6">
                    <div>
                        <h3>Check In</h3>
                        <h2>Monday, June 27th 2022</h2>
                    </div>
                    <div>
                        <h3>Check Out</h3>
                        <h2>Thursday, June 30th 2022</h2>
                    </div>
                    <div>
                        <h3>Adult</h3>
                        <h2>1</h2>
                    </div>
                    <div>
                        <h3>Children</h3>
                        <h2>02</h2>
                    </div>
                </div>
                <div>
                    <h3>Reserved Room</h3>
                    <h2>Vacation King Room</h2>
                </div>
                <div>
                    <h3>Payment Total</h3>
                    <h2>IDR 1800000</h2>
                </div>
            </div>

            <div className="flex flex-row pt-8 gap-6">
                {/* <Router> */}
                    <Link to="/pesan">
                        <button className="bg-mondokkiprimary-500 hover:bg-mondokkiprimary-400 text-white font-bold py-2 px-4 rounded w-fit">Change Booking Date</button>
                    </Link>
                    <Link to="/pesan">
                        <button className="bg-mondokkiprimary-500 hover:bg-mondokkiprimary-400 text-white font-bold py-2 px-4 rounded w-fit">Confirm Summary</button>
                    </Link>
                {/* </Router> */}
            </div>

        </div>
    )
}

export default BookingForm