import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const language = [
    {
        code: "en",
        names: "INGLIZ",
        conuntry__name: "gb"
    },
    {
        code: "fr",
        names: "FRANSUZ",
        conuntry__name: "fr"
    },
    {
        code: "ar",
        names: "عربى",
        conuntry__name: "sa"
    },
    {
        code: "uz",
        names: "UZBEK",
        conuntry__name: "uzb"
    }
];



function Navbar() {
    const [toggle, setToggle] = useState(false);
    const { t } = useTranslation();

    const toggleBtn = () => {
        setToggle(!toggle);
        if (toggle === false) {
            document.querySelector("body").style.overflow = "hidden";
        }
        else {
            document.querySelector("body").style.overflow = "initial";
        }
    }

    return (
        <div className=" mt-3 flex justify-between items-center w-10/12 mx-auto header">
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
                <li><Link to={"/contact"} className="girloy__font__nav">Contacts</Link></li>
                <div class="relative inline-flex">
                    <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
                    <select class="girloy__font__nav rounded-full  h-10  pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                        {language.map(til => (
                            <option onClick={() => i18next.changeLanguage(til.code)} key={til.conuntry__name} className="text-2xl girloy__font__nav">{til.names}</option>
                        ))}
                    </select>
                </div>
            </ul>
            <h2>{t('app_title')}</h2>
        </div >
    );
}

export default Navbar;