import doctor__man from "../../img/doctor__man.png"
function AboutOne() {
    return (
        <div className="w-10/12 mx-auto my-20">
            <div className="grid items-start content__two grid-cols-2 gap-10">
                <div className=" space-y-2 flex flex-col justify-center items-start">
                    <div className="orange__line"></div>
                    <h1 className="content__two__sarlavha">
                        About us
                    </h1>
                    <p className="content__two__text __qator5">Our company’s main goal is supplying the best to our customers. With this goal our company has been established in 2019 by a group of professionals and surgeons. One of worlds economic hubs, London has been chosen to be our head office location.
                    </p>
                    <p className="content__two__text __qator5">Our company’s main goal is supplying the best to our customers. With this goal our company has been established in 2019 by a group of professionals and surgeons. One of worlds economic hubs, London has been chosen to be our head office location.

                    </p>
                </div>
                <div style={{ height: "520px" }} className="relative content__two__div__img__div about__one__img__div">
                    <img className="absolute content__two__div__img bottom-0" src={doctor__man} alt="doctor__man" />
                </div>
            </div>
        </div >
    );
}

export default AboutOne;