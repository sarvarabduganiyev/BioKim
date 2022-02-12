import ContentEight from "../home/ContentEight";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import ContentThree from "../home/ContentThree";
import AboutOne from "./AboutOne";
import AboutThree from "./AboutTree";
import AboutTwo from "./AboutTwo";
import AboutFour from "./AboutFour";

function About() {
    return (
        <div>
            <Navbar />
            <AboutOne />
            <AboutTwo />
            <AboutThree />
            <ContentThree />
            <AboutFour />
            <div className="space-y-12">
                <ContentEight />
                <Footer />
            </div>
        </div>
    );
}

export default About;