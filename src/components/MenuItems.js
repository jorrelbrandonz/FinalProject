import { FaHome } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";

export const MenuItems = [
    {
        title : "Home",
        url : "/",
        cName : "nav-links",
        icon : <FaHome/>,
        space: "    "
    },
    {
        title : "Book Flight",
        url : "/bookflight",
        cName : "nav-links",
        icon : <FaPlaneDeparture/>,
        space: "    "
    },
    {
        title : "Profile",
        url : "/profile",
        cName : "nav-links",
        icon : <CgProfile/>,
        space: "    "
    },
    {
        title : "Log-in",
        url : "/login",
        cName : "nav-links",
        icon : <FiLogIn/>,
        space: "    "
    },
];