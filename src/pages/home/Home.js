import ContentFive from "./ContentFive";
import ContentFour from "./ContentFour";
import ContentOne from "./ContentOne";
import ContentSix from "./ContentSix";
import ContentThree from "./ContentThree";
import ContentTwo from "./ContentTwo";
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

        </>
    );
}
export default Home;