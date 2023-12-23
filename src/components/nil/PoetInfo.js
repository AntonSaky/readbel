import React from "react";
import { useTranslation } from "react-i18next";
import Nil from '../../img/Nil/NilHoriz.jpg'



export function PoetInfo(){

    const {t} = useTranslation();

    return(
        <div>
            <h2 className="poet-title">{t("nil-name")}{/*Якуб Колас*/}</h2>
            <div className="poet-info-wrap">
                <p className="poet-info">
                {t("nil-info")}
                </p>
                <div className="poet-img">
                    <img src={Nil} alt="Фото Якуба"/>
                </div>
            </div>
        </div>
    )
}