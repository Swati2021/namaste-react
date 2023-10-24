import { useContext, useState } from "react";
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    return (
        <div className = "flex justify-between shadow-lg bg-pink-100">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus===true ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>   
                    <li className="font-bold px-2">{data?.loggedInUser }</li> 
                   <button className="loginBtn"
                   onClick = {() => {
                    btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login")
                   }}
                   > {btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;