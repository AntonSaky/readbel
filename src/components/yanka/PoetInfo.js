import React from "react";
import { useTranslation } from "react-i18next";
import Yanka from '../../img/Yanka/ЯнкаГоризонт.jfif'



export function PoetInfo(){

    const {t} = useTranslation();

    return(
        <div>
            <h2 className="poet-title">{t("yanka-name")}{/*Якуб Колас*/}</h2>
            <div className="poet-info-wrap">
                <p className="poet-info">
                {t("yanka-info")}
                </p>
                <div className="poet-img">
                    <img src={Yanka} alt="Фото Янки"/>
                </div>
            </div>
        </div>
    )
}