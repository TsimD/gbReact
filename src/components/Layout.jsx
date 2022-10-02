import React from 'react';
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import "../Style/Layout.css";


function Layout (props) {
  return (
     <div className="conteiner">
       <Navbar/>
       <main>
         <Outlet/>
       </main>
     </div>
  );
}

export default Layout;