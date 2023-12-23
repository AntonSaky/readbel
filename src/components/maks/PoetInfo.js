import React from "react";
import { useTranslation } from "react-i18next";
import Maks from '../../img/Maks/MaksHoriz.jpeg'



export function PoetInfo(){

    const {t} = useTranslation();

    return(
        <div>
            <h2 className="poet-title">{t("maks-name")}{/*Якуб Колас*/}</h2>
            <div className="poet-info-wrap">
                <p className="poet-info">
                {t("maks-info")}
                </p>
                <div className="poet-img">
                    <img src={Maks} alt="Фото Богдановича>"/>
                </div>
            </div>
        </div>
    )
}