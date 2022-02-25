import React, { useState } from "react";
const ContactTab = ({ setLocation }) => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";
    return (
        <div className="contact__one__card  overflow-hidden">
            <ul className="flex items-center justify-between">
                <li
                    className={`tabs ${getActiveClass(1, "contact__tab__active ")}contact__one__card__tabName__div__h1`}
                    onClick={() => {
                        toggleTab(1);
                        setLocation("Uzbekistan");
                    }}
                >
                    Uzbekistan
                </li>
                <li
                    className={`tabs ${getActiveClass(2, "contact__tab__active ")}contact__one__card__tabName__div__h1`}
                    onClick={() => {
                        toggleTab(2)
                        setLocation("AQSH");
                    }}
                >
                    United Kingdom
                </li>
                <li
                    className={`tabs ${getActiveClass(3, "contact__tab__active ")}contact__one__card__tabName__div__h1`}
                    onClick={() => {
                        toggleTab(3)
                        setLocation("Kazakistan");
                    }}
                >
                    Kazakistan
                </li>
            </ul>
            <div className="my-12 contact__one__card__underline__div"></div>
            <div className="content-container">
                <div className={`content__tab ${getActiveClass(1, "active-content")} w-11/12 mx-auto`}>
                    <div className="contact__tab__inner">
                        <h5 className="mt-2 __qator1">Address:</h5>
                        <h2 className="mt-1 h-20 __qator3">...  9 Bunyodkor Main Street, Chilonzor district, Tashkent, Uzbekistan Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, modi doloremque cum neque voluptates consequatur voluptatibus quia cumque exercitationem ratione molestiae? Facilis placeat iusto explicabo provident, obcaecati dignissimos fugit nam?
                        </h2>
                    </div>
                    <div className="contact__tab__inner">
                        <h5 className="mt-5 __qator1">Email:</h5>
                        <h2 className="mt-1 __qator1">info@biolabgroups.com</h2>
                    </div>
                    <div className="contact__tab__inner">
                        <h5 className="mt-5 __qator1">Number:</h5>
                        <h2 className="mt-1 __qator1">+998951959195
                        </h2>
                    </div>
                </div>
                <div className={`content__tab ${getActiveClass(2, "active-content")} w-11/12 mx-auto`}>
                    <div className="contact__tab__inner">
                        <h5 className="mt-2 __qator1">Address:</h5>
                        <h2 className="mt-1 h-20 __qator3">..... 9 Bunyodkor Main Street, Chilonzor district, Tashkent, Uzbekistan Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, modi doloremque cum neque voluptates consequatur voluptatibus quia cumque exercitationem ratione molestiae? Facilis placeat iusto explicabo provident, obcaecati dignissimos fugit nam?
                        </h2>
                    </div>
                    <div className="contact__tab__inner">
                        <h5 className="mt-5 __qator1">Email:</h5>
                        <h2 className="mt-1 __qator1">info@biolabgroups.com</h2>
                    </div>
                    <div className="contact__tab__inner">
                        <h5 className="mt-5 __qator1">Number:</h5>
                        <h2 className="mt-1 __qator1">+998951959195
                        </h2>
                    </div>
                </div>
                <div className={`content__tab ${getActiveClass(3, "active-content")} w-11/12 mx-auto`}>
                    <div className="contact__tab__inner">
                        <h5 className="mt-2 __qator1">Address:</h5>
                        <h2 className="mt-1 h-20 __qator3">........ 9 Bunyodkor Main Street, Chilonzor district, Tashkent, Uzbekistan Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, modi doloremque cum neque voluptates consequatur voluptatibus quia cumque exercitationem ratione molestiae? Facilis placeat iusto explicabo provident, obcaecati dignissimos fugit nam?
                        </h2>
                    </div>
                    <div className="contact__tab__inner">
                        <h5 className="mt-5 __qator1">Email:</h5>
                        <h2 className="mt-1 __qator1">info@biolabgroups.com</h2>
                    </div>
                    <div className="contact__tab__inner">
                        <h5 className="mt-5 __qator1">Number:</h5>
                        <h2 className="mt-1 __qator1">+998951959195
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactTab;