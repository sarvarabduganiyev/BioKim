import medical from "../../img/medical.jpg"
function ContentSix() {
    return (
        <div className="w-10/12 mx-auto">
            <div className="my-12 ">
                <div className="orange__line"></div>
                <h1 className="content__four__h1">Reviews</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="content__six__five__card p-3 xl:mt-3">
                    <div className="flex items-center space-x-5">
                        <div className="w-20 relative h-20 rounded-full overflow-hidden">
                            <img className="absolute w-full h-full object-cover" src={medical} alt="mediacal__card" />
                        </div>
                        <div>
                            <h1 className="__qator1">Bahodirov Ibrohim</h1>
                            <h2 className="__qator1">Director od Artel group</h2>
                        </div>
                    </div>
                    <div>
                        <p className="__qator5">Information technology is an industry that many want to work in. Programming, testing, administration, analytics - these and other areas are in demand in the IT field. In the perception of some, working in an IT company is a dream job, but also a routine through the eyes of others</p>
                    </div>
                </div>
                <div className="content__six__five__card p-3 xl:mt-3">
                    <div className="flex items-center space-x-5">
                        <div className="w-20 relative h-20 rounded-full overflow-hidden">
                            <img className="absolute w-full h-full object-cover" src={medical} alt="mediacal__card" />
                        </div>
                        <div>
                            <h1 className="__qator1">Bahodirov Ibrohim</h1>
                            <h2 className="__qator1">Director od Artel group</h2>
                        </div>
                    </div>
                    <div>
                        <p className="__qator5">Information technology is an industry that many want to work in. Programming, testing, administration, analytics - these and other areas are in demand in the IT field. In the perception of some, working in an IT company is a dream job, but also a routine through the eyes of others</p>
                    </div>
                </div>
                <div className="content__six__five__card p-3 xl:mt-3">
                    <div className="flex items-center space-x-5">
                        <div className="w-20 relative h-20 rounded-full overflow-hidden">
                            <img className="absolute w-full h-full object-cover" src={medical} alt="mediacal__card" />
                        </div>
                        <div>
                            <h1 className="__qator1">Bahodirov Ibrohim</h1>
                            <h2 className="__qator1">Director od Artel group</h2>
                        </div>
                    </div>
                    <div>
                        <p className="__qator5">Information technology is an industry that many want to work in. Programming, testing, administration, analytics - these and other areas are in demand in the IT field. In the perception of some, working in an IT company is a dream job, but also a routine through the eyes of others</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContentSix;