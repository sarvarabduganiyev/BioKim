import ContentEight from "../home/ContentEight";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import ContactOne from "./ContactOne";

function Contact() {
    return (
        <div>
            <Navbar />
            <ContactOne />
            <ContentEight />
            <div className="mt-12">
                <Footer />
            </div>
        </div>
    );
}

export default Contact;