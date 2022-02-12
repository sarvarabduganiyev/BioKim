import ContentThreeCard from "./ContentThreeCard";

function ContentThree() {
    return (
        <div style={{ backgroundColor: "#71C0C6" }}>
            <div className="grid grid-cols-2 py-20 content__three__head gap-5 w-10/12 mx-auto ">
                <div className="content__three__card__contanier">
                    <div className="white__line"></div>
                    <h1>Out Goals</h1>
                    <ContentThreeCard />
                </div>
                <div className="content__three__card__contanier">
                    <div className="white__line"></div>
                    <h1>Our Mission</h1>
                    <ContentThreeCard />
                </div>
            </div>
        </div>

    );
}

export default ContentThree;