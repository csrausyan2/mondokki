import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Payment (props) {
    return(
        <div className="h-fit py-32 grid grid-col-1 justify-items-center">
            <div className="grid grid-col max-w-7xl justify-items-start">
                <h1>Payment Method</h1>
                <h3>Choose your preferred payment method</h3>
                <div className="flex flex-col">
                    <div className="flex flex-row w-2/3">
                        <div className="credit-card w-full h-60 border-2 border-rose-400 grid grid-cols-1 justify-items-center items-center">
                            <div className="h-fit grid grid-cols-1 gap-8">
                                <div className="w-44 h-full grid align-items-center">
                                    <img src={require('../images/visa.png')} />
                                </div>
                                <div className="h-fit">
                                    <p>credit card</p>
                                </div>
                            </div>
                        
                        </div>
                        <div className="paypal w-full h-50 border-2 border-rose-400 grid grid-cols-1 justify-items-center items-center">
                            <div className="h-fit grid grid-cols-1 gap-8">
                                <div className="w-48 h-full">
                                    <img src={require('../images/paypal.png')}/>
                                </div>
                                <div className="h-fit">
                                    <p>paypal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-rose-400 h-fit w-2/3 p-12 ">
                        <h3>credit card (visa/mastercard)</h3>
                        <p>payment total</p>
                        <h2>IDR 1.000.000</h2>

                        <form className="grid grid-cols-1 gap-6">
                            
                                <label className="block w-full">
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
                                <label className="block w-full">
                                    <span class="text-gray-700">Card Number</span>
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
                                <div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <label className="block w-full">
                                            <span class="text-gray-700">Card Type</span>
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
                                        <label className="block w-full">
                                            <span class="text-gray-700">Expire Date</span>
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
                                        <label className="block w-full">
                                            <span class="text-gray-700">CVV Code</span>
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
                                    </div>
                                    
                                </div>

                                <div className="grid grid-cols-1 justify-items-end mt-6">
                                    <Link to="/pesan">
                                        <button disabled className="bg-mondokkiprimary-500 disabled:bg-mondokkiprimary-100 hover:bg-mondokkiprimary-400 text-white font-bold py-2 px-4 rounded w-fit">Pay With Credit Card</button>
                                    </Link>
                                </div>

                        </form>

                        

                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment