import doctor__man from "../../img/doctor__man.png";
import { useTranslation } from 'react-i18next';
function ContentTwo() {
    const { t } = useTranslation();
    return (
        <div className="w-10/12 mx-auto my-20">
            <div className="grid content__two grid-cols-2 gap-10">
                <div className=" space-y-2 flex flex-col justify-center items-start">
                    <div className="orange__line"></div>
                    <h1 className="content__two__sarlavha">
                        {t("About_the_center")}
                    </h1>
                    <p className="content__two__text __qator5">{t("our__company")}
                    </p>
                    <p className="content__two__text __qator5">{t("our__company")}
                    </p>
                    <div className="content__one__btn__div">
                        <button className="content__one__div__btn px-12 py-2 text-white ">{t("Read_more")}</button>
                    </div>
                </div>
                <div className="relative content__two__div__img__div">
                    <img className="absolute content__two__div__img bottom-0" src={doctor__man} alt="doctor__man" />
                </div>
            </div>
        </div>
    );
}

export default ContentTwo;