import doctor__girl from "../../img/doctor__girl.png";

function ContentOne() {
    return (
        <div className="w-11/12 mx-auto my-8 content__one__div">
            <div className="w-11/12 content__one__div__inner__content  mx-auto flex grow">
                <div className="w-7/12 space-y-2 content__one__div__text__div flex flex-col justify-center items-start">
                    <h1 className="content__one__div__sarlavha __qator3">
                        Partnership & Collaboration
                    </h1>
                    <p className="content__one__div__text __qator4">BioLab group is open to prospective partnership with companies of different spheres and specialities. Our main goal is being market oriented and provide the best quality possible. Please, contact us regarding further enquiries.
                    </p>
                    <div className="content__one__btn__div">
                        <button className="content__one__div__btn px-12 py-2 text-white ">Get Start</button>
                    </div>
                </div>
                <div className="relative content__one__div__img__div">
                    <img className="absolute content__one__div__img  bottom-0" src={doctor__girl} alt="doctor__girl__img" />
                </div>
                <div className="space-y-3 my-12 px-3">
                    <div className="content__one__div__card flex flex-col justify-center items-center py-8 px-2">
                        <div className="w-11/12 mx-auto">
                            <h1 className="__qator2">45</h1>
                            <h4 className="__qator2">state partners</h4>
                        </div>
                    </div>
                    <div className="content__one__div__card flex flex-col justify-center items-center py-8 px-2">
                        <div className="w-11/12 mx-auto">
                            <h1 className="__qator2">1000+</h1>
                            <h4 className="__qator2">operations to our
                                patients</h4>
                        </div>
                    </div>
                    <div className="content__one__div__card flex flex-col justify-center items-center py-8 px-2">
                        <div className="w-11/12 mx-auto">
                            <h1 className="__qator2">5000+</h1>
                            <h4 className="__qator2">lenses were delivered to partner clinics</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentOne;