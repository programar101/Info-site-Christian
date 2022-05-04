import React from "react"
import "../style.css"
import logo from '../components/Images/logo.png'; 



export default function Navbar() {
    return (
        <nav>
            <img className="nav--icon" src={logo}  alt="" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )}