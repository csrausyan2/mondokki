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
            {/* https://tailwindcss.com/docs/translate + https://reactjs.org/docs/conditional-rendering.html */}
            <div className={`${show ? '-translate-y-16' : 'translate-y-0'} fixed bg-white w-screen z-20 duration-300`}>
                <div className="Navigation px-12">
                    <header className="Navigation-Header h-16 flex justify-between items-center">
                        <div className='logo w-fit'>
                            <Link to="/">
                              <p className="text-mondokkiprimary-500 font-bold text-2xl">Mondokki</p>
                            </Link>
                        </div>
                        <div className='flex gap-4'>
                            <form className="">
                                <label>
                                    <input className="w-60 rounded-lg border-slate-400 " type="text" name="name" placeholder='Insert booking code'></input>
                                </label>
                            </form>
                            <Link to="/about-us">
                                <button className="text-mondokkiprimary-500 font-bold py-2 px-4 rounded w-40">About</button>
                            </Link>
                            <Link to="/roomsavailable">
                                <button className="text-mondokkiprimary-500 font-bold py-2 px-4 rounded w-40">Book Now</button>
                            </Link>
                  
                        </div>
                    </header>
                    
                </div>
                
            </div>
        </Router>
    )
}


export default Navigation

