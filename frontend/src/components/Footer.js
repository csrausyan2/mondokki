import '../App.css'
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Footer() {
    return(
        <Router>
            <div className='h-80 bg-mondokkiprimary-900 px-12 py-12 px-40'>
                <div className='flex flex-rows'>
                    <div className='w-1/4 h-full '>
                        <div className='h-36 w-36 rounded-full bg-slate-300 mb-4'>
                        </div>

                            <Link to="/">
                                <p className="text-white font-bold text-2xl">Mondokki</p>
                            </Link>

                        {/* <p className='font-bold'>Mondokki</p> */}

                    </div>
                    <div className='w-1/4'>
                        <p className='font-bold text-white'>Explore</p>
                        <Link to="/about-us">
                            <p className='text-white'>About</p>
                        </Link>
                        <Link to="/facilities">
                            <p className='text-white'>Facilities</p>
                        </Link>
                        <Link to="/map">
                            <p className='text-white'>Map</p>
                        </Link>
                        <Link to="/booking">
                            <p className='text-white'>Book Now</p>
                        </Link>
                    </div>
                    <div className='w-1/4'>
                        <p className='font-bold text-white'>Contact</p>
                        <p className='text-white'>"Address"</p>
                        <p className='text-white'>"Phone"</p>
                        <p className='text-white'>"Email"</p>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Footer