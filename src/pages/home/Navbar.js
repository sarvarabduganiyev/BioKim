import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const toggleBtn = () => {
        setToggle(!toggle);
    }
    return (
        <div className=" mt-3 flex justify-between items-center w-10/12 mx-auto">
            <div className="flex md:blok logo__div  justify-between items-center">
                <img src={logo} alt="LOGO" />
                <svg onClick={toggleBtn} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  burger__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <ul style={toggle ? { left: "0px", overflow: "hidden" } : { left: "-100%" }} className="flex items-center navbar__links space-x-8">
                <li><Link to="/about" className="girloy__font__nav">About us</Link></li>
                <div className="flex justify-center space-x-2 items-center">
                    <li><Link to={"/catalog"} className="girloy__font__nav">Catalog</Link></li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.433 9.45L12.004 15.88L5.57397 9.45" stroke="#020105" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <li><Link to={'/blog'} className="girloy__font__nav">Blog</Link></li>
                <li><a href="#" className="girloy__font__nav">Contacts</a></li>
                <div className="flex justify-center space-x-2 items-center">
                    <li><a href="#" className="girloy__font__nav">Eng</a></li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.433 9.45L12.004 15.88L5.57397 9.45" stroke="#020105" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </ul>
        </div >
    );
}

export default Navbar;