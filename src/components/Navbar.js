import { Component } from "react";
import "./NavbarStyles.css";
import { FaHome } from "react-icons/fa";
import {Link} from "react-router-dom";
import {MenuItems} from "./MenuItems";
import logo from './logo3.png';

const style = { padding: "10px"}
class Navbar extends Component {
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">JLABS AIRLINES</h1>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}><Link className= {item.cName} to ={item.url}>{item.icon}{item.space}{item.title}</Link></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;

/* <img src ={logo} width= "90" height="75" className="navbarimg" />*/