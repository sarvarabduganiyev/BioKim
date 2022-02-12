import ContentThreeCard from "../home/ContentThreeCard";


function CatalogFive() {
    return (
        <div className="">
            <div className="p-5 rounded-2xl my-20 w-9/12 mx-auto catalog__five__card ">
                <div className="grid grid-cols-2 catalog__five__card__div__grid">
                    <ContentThreeCard />
                    <div className="ml-8 catalog__five__card__div__grid__card">
                        <ContentThreeCard />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CatalogFive;