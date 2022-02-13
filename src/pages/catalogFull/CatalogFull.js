import CatalogFullOne from "./CatalogFullOne";
import ContentEight from "../home/ContentEight";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
function CatalogFull() {
    return (
        <div>
            <Navbar />
            <div className="mt-12">
                <CatalogFullOne />
            </div>
            <ContentEight />

            <div className="mt-12">
                <Footer />
            </div>
        </div>

    );
}

export default CatalogFull;