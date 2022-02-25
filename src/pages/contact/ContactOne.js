import { useState } from "react";
import ContactTab from "./ContactTab";
function ContactOne() {
    const [location, setLocation] = useState('Uzbekistan');
    return (
        <div>
            <div className="mt-12 w-10/12 mx-auto">
                <div className="orange__line"></div>
                <h1 className="content__four__h1">Contacts</h1>
            </div>
            <div className="mt-12 w-full">
                <iframe className="bioMap" src={location === "Uzbekistan" ? "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11984.713267775107!2d69.2350318!3d41.3267357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8109d550917a88e!2z0K3QodCa0Jgg0JbRg9Cy0LAg0LHQvtC30L7RgNC4!5e0!3m2!1sru!2s!4v1644741993927!5m2!1sru!2s" :
                    (location === "AQSH" ? "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11983.719777700146!2d69.2915203!3d41.3321367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe77558078048a9aa!2sBodomzor%20Terrasa!5e0!3m2!1sru!2s!4v1645717968555!5m2!1sru!2s" : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11981.409506287195!2d69.206178!3d41.344694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42835c8e24a158e5!2z0JHQtdGA0YPQvdC4!5e0!3m2!1sru!2s!4v1645718081390!5m2!1sru!2s")
                }
                    width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="bg-red-100 h-auto  relative">
                <ContactTab setLocation={setLocation} />
            </div>
        </div >
    );
}

export default ContactOne;