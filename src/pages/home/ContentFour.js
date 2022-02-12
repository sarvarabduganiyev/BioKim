import products from "../../img/products.png";
import CatalogCard from "./CatalogCard";

function ContentFour() {
    return (
        <div className="w-10/12 mx-auto mt-12">
            <div>
                <div className="orange__line"></div>
                <h1 className="content__four__h1">New products</h1>
            </div>
            <div className="my-12 flex justify-center items-center space-x-5 flex-wrap">
                <div className="content__four__card ml-3 xl:ml-0">
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
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
            <div className="w-11/12 mx-auto flex justify-center items-center">
                <button className="content__four__product__btn">All products</button>
            </div>
        </div>
    );
}

export default ContentFour;