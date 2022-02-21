import ContentEight from "./ContentEight";
import ContentFive from "./ContentFive";
import ContentFour from "./ContentFour";
import ContentOne from "./ContentOne";
import ContentSeven from "./ContentSeven";
import ContentSix from "./ContentSix";
import ContentThree from "./ContentThree";
import ContentTwo from "./ContentTwo";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <ContentOne />
            <ContentTwo />
            <ContentThree />
            <ContentFour />
            <ContentFive />
            <ContentSix />
            <ContentSeven />
            <ContentEight />
            <div className="mt-12">
                <Footer />
            </div>
        </>
    );
}
export default Home;