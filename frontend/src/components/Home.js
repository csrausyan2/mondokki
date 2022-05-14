import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Home () {
    return(
        <div className="">
            <div className="h-screen p-24 flex flex-row">
                <div className="bg-slate-300 h-full w-1/2">

                </div>
                <div className="pl-12">
                    <div className="h-fit">
                        <article className="prose prose-slate lg:prose-xl">
                            <h1>Mondokki</h1>
                            <h2>An Opensource Solution for your accomodation business</h2>
                        </article>
                        <a href="https://github.com/noieda/mondokki">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 mt-8">Github</button>
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="h-screen p-24">

            </div> */}
        </div>
    )
}

export default Home