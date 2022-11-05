import React from "react";
import TuitList from "../tuits/tuits-list";
import "./index.css";
import WhatsHappening from "./whats-happening";
import { useSelector } from "react-redux";

const HomeComponent = () => {

 return(
   <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{ "position": "relative" }}>
        <h4>Home</h4>
        <WhatsHappening />
        <TuitList/>
   </div>
 );
};
export default HomeComponent;