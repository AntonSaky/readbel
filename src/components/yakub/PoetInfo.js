import React from "react";
import { useTranslation } from "react-i18next";
import Yakub from '../../img/Yakub/ЯкубГориз.jpg'



export function PoetInfo(){

    const {t} = useTranslation();

    return(
        <div>
            <h2 className="poet-title">{t("yakub-name")}{/*Якуб Колас*/}</h2>
            <div className="poet-info-wrap">
                <p className="poet-info">
                {t("yakub-info")}
                </p>
                <div className="poet-img">
                    <img src={Yakub} alt="Фото Якуба"/>
                </div>
            </div>
        </div>
    )
}