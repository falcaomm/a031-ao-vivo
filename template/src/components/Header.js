import React from "react";
import logo from "../img/logo.png";

export default function Header() {
    return (
        <div className="header">
            <h1 className="title">Garagem</h1>
            <img src={logo} className="logo"/>
        </div>
    )
}