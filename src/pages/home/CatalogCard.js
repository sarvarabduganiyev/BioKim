import products from "../../img/products.png";
function CatalogCard() {
    return (
        <div className="content__four__card">
            <div className="front">
                <div style={{ height: "250px" }} className=" relative">
                    <img className="image w-full h-full absolute" src={products} alt="products" />
                </div>
                <div>
                    <h2 className="mt-2 __qator2 h-16 bg">Hydrophilic Lens 860uv</h2>
                </div>
            </div>
            <div class="back">
                <p className="__qator10">Rick and Morty is an American adult animated television series created by Justin Roiland and Dan
                    Harmon for Adult Swim. The series follows the misadventures of alcoholic scientist Rick and his
                    easily influenced grandson Morty, who split their time
                    between domestic family life and interdimensional travel Lorem ipsum, dolor sit amet consectetur adipisicing elit. In assumenda voluptates numquam praesentium repudiandae voluptate mollitia ex aliquid quasi saepe. Architecto culpa eos inventore sunt libero exercitationem repudiandae nostrum sapiente?
                </p>
                <a className="underline hover:text-orange-900" href="#">Read More</a>
            </div>
        </div>
    );
}

export default CatalogCard;