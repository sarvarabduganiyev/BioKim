import CatalogCards from "./CatalogCards";
function CatalogTwo() {
    return (
        <div className="w-10/12 mx-auto my-20">
            <div className="orange__line"></div>
            <h1 className="content__two__sarlavha mb-3">
                Lens Injectors
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <CatalogCards />
            </div>

        </div>
    );
}

export default CatalogTwo;