import paypa from "../../img/paypa.png"
import fisoiline from "../../img/fisoiline.png"
import gyrozen from "../../img/gyrozen.png"
import lacrivira from "../../img/lacrivira.png"
import usiol from "../../img/usiol.png"



function ContentSeven() {
    return (
        <div className="w-10/12 mx-auto">
            <div className="my-12 ">
                <div className="orange__line"></div>
                <h1 className="content__four__h1">Our partners</h1>
            </div>
            <div className="flex items-center justify-center space-y-8 xl:space-y-0 flex-wrap space-x-12">
                <div style={{
                    height: "93px", width: "186px"
                }} className="relative">
                    <img className="absolute w-full h-full object-fill" src={usiol} alt="usiol" />
                </div>
                <div style={{
                    height: "93px", width: "186px"
                }} className="relative">
                    <img className="absolute w-full h-full object-fill" src={lacrivira} alt="lacrivira" />
                </div>
                <div style={{
                    height: "93px", width: "186px"
                }} className="relative">
                    <img className="absolute w-full h-full object-fill" src={gyrozen} alt="gyrozen" />
                </div>
                <div style={{
                    height: "93px", width: "186px"
                }} className="relative">
                    <img className="absolute w-full h-full object-fill" src={fisoiline} alt="fisoiline" />
                </div>
                <div style={{
                    height: "93px", width: "186px"
                }} className="relative">
                    <img className="absolute w-full h-full object-fill" src={paypa} alt="paypa" />
                </div>
            </div>
        </div >
    )
}

export default ContentSeven;