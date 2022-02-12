import ukol from "../../img/ukol.png"
function CatalogCards() {
    return (
        <div className="about__four__card p-4">
            <div style={{ height: "211px" }} className="relative ">
                <img className="absolute w-full h-full object-fill" src={ukol} alt="ukol" />
            </div>
            <div>
                <h1 className="__qator1 mt-2">Best lenses of the year</h1>
            </div>
        </div>
    );
}

export default CatalogCards;