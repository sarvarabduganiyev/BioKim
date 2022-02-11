function ContentEight() {
    return (
        <div className="w-11/12 mt-20 mx-auto">
            <div className="content__eight__bg">
                <div className="p-12">
                    <div className="orange__line"></div>
                    <h1 className="content__four__h1 content__eight__h1">Contact with us</h1>
                    <p className="content__eight__bg__p">Leave a request and we will contact you shortly</p>
                </div>
                <div className="px-12">
                    <div className="flex content__eight__bg__input__div">
                        <input type="text" placeholder="Name..." className="content__eight__bg__input  block py-2  pl-3  rounded-2xl" />
                        <input type="email" placeholder="Email..." className="content__eight__bg__input content__eight__bg__input__2 block  py-2  pl-3  rounded-2xl" />
                    </div>
                    <div className="content__eight__bg__textarea__div">
                        <textarea name="text" placeholder="Message" className="content__eight__bg__textarea  pl-3 mt-8 pt-2   rounded-2xl"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentEight;