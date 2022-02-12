import ContentEight from "../home/ContentEight";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import BlogOne from "./BlogOne";

function Blog() {
    return (
        <div>
            <Navbar />
            <BlogOne />
            <div className="my-12">
                <ContentEight />
            </div>
            <Footer />
        </div>

    );
}

export default Blog;