import doctor__girl from "../../img/doctor__girl.png";
import { useTranslation } from 'react-i18next';

function ContentOne() {
    const { t } = useTranslation();
    return (
        <div className="w-11/12 mx-auto my-8 content__one__div">
            <div className="w-11/12 content__one__div__inner__content  mx-auto flex grow">
                <div className="w-7/12 space-y-2 content__one__div__text__div flex flex-col justify-center items-start">
                    <h1 className="content__one__div__sarlavha __qator3">
                        {t("Partnership")} & {t("Collaboration")}
                    </h1>
                    <p className="content__one__div__text __qator4">{t("biolab__yozuv")}
                    </p>
                    <div className="content__one__btn__div">
                        <button className="content__one__div__btn px-12 py-2 text-white ">{t("Get__Start")}</button>
                    </div>
                </div>
                <div className="relative content__one__div__img__div">
                    <img className="absolute content__one__div__img  bottom-0" src={doctor__girl} alt="doctor__girl__img" />
                </div>
                <div className="space-y-3 my-12 px-3">
                    <div className="content__one__div__card flex flex-col justify-center items-center py-8 px-2">
                        <div className="w-11/12 mx-auto">
                            <h1 className="__qator2">45</h1>
                            <h4 className="__qator2">{t("state__partners")}</h4>
                        </div>
                    </div>
                    <div className="content__one__div__card flex flex-col justify-center items-center py-8 px-2">
                        <div className="w-11/12 mx-auto">
                            <h1 className="__qator2">1000+</h1>
                            <h4 className="__qator2">{t("operations__to__our__patients")}</h4>
                        </div>
                    </div>
                    <div className="content__one__div__card flex flex-col justify-center items-center py-8 px-2">
                        <div className="w-11/12 mx-auto">
                            <h1 className="__qator2">5000+</h1>
                            <h4 className="__qator2">{t("lenses_were_delivered_to_partner_clinics")}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentOne;