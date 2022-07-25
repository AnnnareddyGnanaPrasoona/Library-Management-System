import React from 'react';
import { Link } from "react-router-dom";
import './sideBar.scss';

const routes = [
    {
        path: "/dashboard",
        iconClass: "fa-solid fa-book",
        name: "Dashboard"
    },
    {
        path: "/register",
        iconClass: "fa-solid fa-user-plus",
        name: "Register"
    },
    {
        path: "/account",
        iconClass: "fa-solid fa-user",
        name: "Account"
    }
]

const sideBar = () => {
    return (
        <div className='leftContent'>
            <ul className='menuContainer'>
                {
                    routes.map(({ path, iconClass, name }, key) => (<li className='menuItem' key={key}>
                        <Link className='routeLink' to={path}>
                            <i className={iconClass}></i>
                            <div>{name}</div>
                        </Link>
                    </li>))
                }
                {/* <li className='menuItem'>
                    <Link className='routeLink activeLink' to="/dashboard">
                        <i className="fa-solid fa-book"></i>
                        <div>Dashboard</div>
                    </Link>
                </li>
                <li className='menuItem'>
                    <Link className='routeLink' to="/register">
                        <i className="fa-solid fa-user-plus"></i>
                        <div>Register</div>
                    </Link>
                </li>
                <li className='menuItem'>
                    <Link className='routeLink' to="/account">
                        <i className="fa-solid fa-user"></i>
                        <div>Account</div>
                    </Link>
                </li> */}
            </ul>
        </div>
    )
}

export default sideBar