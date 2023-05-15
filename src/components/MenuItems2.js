import { FaHome } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";
import { FaBusinessTime } from "react-icons/fa";

export const MenuItems2 = [
    {
        title: "Home",
        url: "/",
        cName: "nav-links",
        icon: <FaHome />,
        space: "    "
    },
    {
        title: "Book Flight",
        url: "/bookflight",
        cName: "nav-links",
        icon: <FaPlaneDeparture />,
        space: "    "
    },
    {
        title: "About Us",
        url: "/about",
        cName: "nav-links",
        icon: <FaBusinessTime />,
        space: "    "
    },
    {
        title: "Log-in",
        url: "/login",
        cName: "nav-links",
        icon: <FiLogIn />,
        space: "    "
    },
];