import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import User from "./User/User";

export default function Layout(){
    return(
        <>
        <Navbar />
        <Outlet />
      
      
        </>
    )
}

