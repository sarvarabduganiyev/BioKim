import ContentEight from "../home/ContentEight";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import BlogFullOne from "./BlogFullOne";

function BlogFull() {
    return (
        <div>
            <Navbar />
            <BlogFullOne />
            <div className="my-12">
                <ContentEight />
            </div>
            <Footer />
        </div>
    );
}

export default BlogFull;