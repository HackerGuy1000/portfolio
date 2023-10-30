import React from "react";

import './Home.css';

import Navbar from "../components/Navbar";

function Home(){
    return(
        <main className="body">
        <Navbar/>
        <div>
            <h1 className="test">Home Page</h1>
        </div>
        </main>
    );
}

export default Home;