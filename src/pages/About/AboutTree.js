import medical from "../../img/medical.jpg";
function AboutThree() {
    return (
        <div className="w-10/12 mx-auto my-20">
            <div className="orange__line"></div>
            <h1 className="content__two__sarlavha mb-3">
                Company Team
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <div className="about__two__card p-5">
                    <div style={{ height: "250px" }} className="relative">
                        <img className="absolute rounded-2xl overflow-hidden w-full h-full object-cover" src={medical} alt="medical" />
                    </div>
                    <div>
                        <h1 className="mt-1 __qator1">Abdug'aniyev Sarvar</h1>
                        <div className="h-12">
                            <h2 className="__qator2">Communications Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus neque labore pariatur voluptatem dignissimos officia. Iure commodi architecto harum voluptate, quos, nobis tempora facere, veritatis voluptatibus quidem laborum molestias. Nobis. and corporate relations head</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutThree;