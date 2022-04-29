import '../App.css'
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navigation() {

    // https://stackoverflow.com/questions/69473259/how-to-show-or-hide-navbar-when-scroll-use-react-js
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {

        const controlNavbar = () => {
            if (typeof window !== 'undefined') { 
              if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
                setShow(false); 
              } else { // if scroll up show the navbar
                setShow(true);  
              }
        
              // remember current page location to use in the next move
              setLastScrollY(window.scrollY); 
            }
        };

        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
    
          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);


    return (
        <Router>
            <div className={`active ${show && 'hidden'}`}>
                <div className="Navigation fixed bg-amber-500 w-screen z-20 px-12">
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
                
            </div>
        </Router>
    )
}


export default Navigation

