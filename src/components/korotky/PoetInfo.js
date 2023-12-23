import React from "react";
import { useTranslation } from "react-i18next";
import Korotky from '../../img/Korotky/KorotkyHoriz.jpg'



export function PoetInfo(){

    const {t} = useTranslation();

    return(
        <div>
            <h2 className="poet-title">{t("korotky-name")}{/*Якуб Колас*/}</h2>
            <div className="poet-info-wrap">
                <p className="poet-info">
                {t("korotky-info")}
                </p>
                <div className="poet-img">
                    <img src={Korotky} alt="Фото Короткевича"/>
                </div>
            </div>
        </div>
    )
}