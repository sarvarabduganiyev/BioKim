import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const language = [
    {
        code: "en",
        names: "English",
        conuntry__name: "gb"
    },
    {
        code: "fr",
        names: "français",
        conuntry__name: "fr"
    },
    {
        code: "ar",
        names: "عربى",
        conuntry__name: "sa"
    },
    {
        code: "uz",
        names: "O'zbek",
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
    //<h2>{t('app_title')}</h2>
    return (
        <div className=" mt-3 flex justify-between items-center w-10/12 mx-auto header">
            <div className="flex md:blok logo__div  justify-between items-center">
                <img src={logo} alt="LOGO" />
                <svg onClick={toggleBtn} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  burger__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <ul style={toggle ? { left: "0px", overflow: "hidden" } : { left: "-100%" }} className="flex items-center navbar__links space-x-8">
                <li><Link to="/about" className="girloy__font__nav">{t("About_us")}</Link></li>
                <div className="flex justify-center space-x-2 items-center">
                    <li><Link to={"/catalog"} className="girloy__font__nav">{t('Catalog')}</Link></li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.433 9.45L12.004 15.88L5.57397 9.45" stroke="#020105" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <li><Link to={'/blog'} className="girloy__font__nav">{t("blog")}</Link></li>
                <li><Link to={"/contact"} className="girloy__font__nav">{t('Contacts')}</Link></li>
                <div className="dropdown ">
                    <button style={{ color: "black" }} className="btn nav__dropdown bg-white girloy__font__nav text-black ring-none otline-none border-none focus:outline-none focus:ring-none btn-secondary dropdown-toggle flex items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {t("language")}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {language.map(til => (
                            <li className="text-2xl girloy__font__nav" onClick={() => i18next.changeLanguage(til.code)} key={til.conuntry__name} ><a className="dropdown-item" href="#">{til.names}</a></li>
                        ))}
                    </ul>
                </div>
            </ul>

        </div >
    );
}

export default Navbar;