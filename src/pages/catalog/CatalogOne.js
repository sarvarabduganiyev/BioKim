import CatalogCard from "../home/CatalogCard";

function Catalog() {
    return (
        <div className="w-10/12 mx-auto mt-12">
            <div>
                <div className="orange__line"></div>
                <h1 className="content__four__h1">Intraocular Lenses</h1>
            </div>

            {/* <div className="grid md:grid-cols-2 justify-center items-center my-8 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">

               
            </div> */}
            <div className="my-12 flex justify-center items-center space-x-5 flex-wrap">
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
            <div className="my-12 flex justify-center items-center space-x-5 flex-wrap">
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
            <div className="my-12 flex justify-center items-center space-x-5 flex-wrap">
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
        </div>
    );
}

export default Catalog;