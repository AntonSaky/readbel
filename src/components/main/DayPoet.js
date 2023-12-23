import React from "react";
import { Link } from "react-router-dom";
import Yakub from '../../img/Yakub/ЯкубГориз.jpg'
import { useTranslation } from "react-i18next";

export function DayPoet(){

    const{t} = useTranslation();

    return(
        <>
        <section className="writer-of-day">
            <h3>{t("daypoet-name")}</h3>
            <div className="about-writer-wrap">
                <div className="writer-info-wrap">
                    <p className="about-writer">
                         {t("daypoet-info")}
                    </p>
                    <Link id="a-link" className="more" to="/yakub">{t("more")}</Link>
                </div>
                <div className="writer-img">
                    <img src={Yakub} alt="#Фотка Якуба"/>
                </div>
            </div>
        </section>
            
        </>
    )
}