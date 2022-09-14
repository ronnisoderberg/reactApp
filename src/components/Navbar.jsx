import React from "react";
import { NavLink, } from "react-router-dom"


export default function Header() {

    return (
        <nav>
            <ul>
                <li><NavLink exact activeClassName="active" to="/"><h1>Todo</h1></NavLink> </li>
                <li> <NavLink exact activeClassName="active" to="/quiz">Quiz</NavLink></li>
                <li>  <NavLink exact activeClassName="active" to="/about">About</NavLink></li>
            </ul>
        </nav>


    )
}

// https://reactgo.com/reactrouter-header-footer/

