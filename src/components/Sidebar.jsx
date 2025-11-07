import React from "react";
import { Link } from "react-router-dom"
import "./Sidebar.css"
export const Sidebar = () => {
    return <nav>
        <div className="side">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>

                </li>
            </ul>
        </div>
    </nav>
};