import sertifikat from "../../img/sertificat.png"
function AboutFour() {
    return (
        <div className="w-10/12 mx-auto my-20">
            <div className="orange__line"></div>
            <h1 className="content__two__sarlavha mb-3">
                Certificates
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <div className="about__four__card p-4">
                    <div style={{ height: "211px" }} className="relative ">
                        <img className="absolute w-full h-full object-fill" src={sertifikat} alt="sertificat" />
                    </div>
                    <div>
                        <h1 className="__qator1 mt-2">Best lenses of the year</h1>
                    </div>
                </div>
                <div className="about__four__card p-4">
                    <div style={{ height: "211px" }} className="relative ">
                        <img className="absolute w-full h-full object-fill" src={sertifikat} alt="sertificat" />
                    </div>
                    <div>
                        <h1 className="__qator1 mt-2">Best lenses of the year</h1>
                    </div>
                </div>
                <div className="about__four__card p-4">
                    <div style={{ height: "211px" }} className="relative ">
                        <img className="absolute w-full h-full object-fill" src={sertifikat} alt="sertificat" />
                    </div>
                    <div>
                        <h1 className="__qator1 mt-2">Best lenses of the year</h1>
                    </div>
                </div>
                <div className="about__four__card p-4">
                    <div style={{ height: "211px" }} className="relative ">
                        <img className="absolute w-full h-full object-fill" src={sertifikat} alt="sertificat" />
                    </div>
                    <div>
                        <h1 className="__qator1 mt-2">Best lenses of the year</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutFour;