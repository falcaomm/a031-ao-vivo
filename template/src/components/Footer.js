import React from "react";
import Copywrite from "./Copywrite";
import RedesSociais from "./RedesSociais";

export default function Footer(){
    return(
        <div className="footer">
            <RedesSociais/>
            <Copywrite/>
        </div>
    )
}