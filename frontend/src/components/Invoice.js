import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Invoice() {
    return (
        <div className="bg-stone-200 grid justify-items-center py-12">
            <h1>Your Booking Summary</h1>
            <div className="flex flex-col gap-8 my-12">
                <div className="flex flex-row gap-16">
                    <div>
                        <h3>Check In</h3>
                        <h2>Monday, June 27th 2022</h2>
                    </div>
                    <div>
                        <h3>Check Out</h3>
                        <h2>Thursday, June 30th 2022</h2>
                    </div>
                    <div className="w-fit">
                        <h3 className="">Adult</h3>
                        <h2>1</h2>
                    </div>
                    <div className="w-fit">
                        <h3>Children</h3>
                        <h2>2</h2>
                    </div>
                </div>
                <div>
                    <h3>Name</h3>
                    <h2>Mr. Johannsen</h2>
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

            {/* <div className="flex flex-row pt-8 gap-6">
                <Router>
                    <Link to="/pesan">
                        <button className="bg-mondokkiprimary-500 hover:bg-mondokkiprimary-400 text-white font-bold py-2 px-4 rounded w-fit">Change Information</button>
                    </Link>
                    <Link to="/payment">
                        <button className="bg-mondokkiprimary-500 hover:bg-mondokkiprimary-400 text-white font-bold py-2 px-4 rounded w-fit">Continue to Payment</button>
                    </Link>
                </Router>
            </div> */}
        </div>
    )
}

export default Invoice