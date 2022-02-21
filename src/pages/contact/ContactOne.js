import ContactTab from "./ContactTab";
function ContactOne() {
    return (
        <div>
            <div className="mt-12 w-10/12 mx-auto">
                <div className="orange__line"></div>
                <h1 className="content__four__h1">Contacts</h1>
            </div>
            <div className="mt-12 w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11984.713267775107!2d69.2350318!3d41.3267357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8109d550917a88e!2z0K3QodCa0Jgg0JbRg9Cy0LAg0LHQvtC30L7RgNC4!5e0!3m2!1sru!2s!4v1644741993927!5m2!1sru!2s" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div>
                <ContactTab />
            </div>
        </div>
    );
}

export default ContactOne;