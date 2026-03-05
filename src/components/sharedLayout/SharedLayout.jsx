import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

function SharedLayout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        
        
        
        </>
    )
}

export default SharedLayout;