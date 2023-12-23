import React from "react";
import { Container, Image } from "react-bootstrap";
import anton from '../../img/authors/Антон1.jpg';
import { AuthorNav } from "./AuthorNav";
import { useTranslation } from "react-i18next";

export function Anton(){

    const {t} = useTranslation();

    return(
        <div>
            <div className="background"></div>
            <Container id="author-container">
            <AuthorNav/>
            <div className="author-wrap">
                <div className="author-img">
                    <img src={anton} alt="Антон" style={{maxWidth : '190px', height : '230px'}} />
                </div>
                <div>
                    <h2>{t("anton-name")}</h2>
                    <p className="author-info">
                        {t("anton-descript")}
                    </p>
                    <p>Telegram: <a className="links" href="https://t.me/sa_ka_tosh" target="_blank">Sa-ka-tosh</a></p>
                    <p>GitHub: <a className="links" href="https://github.com/AntonSaky" target="_blank">AntonSaky</a></p>
                </div>
            </div>
            
        </Container>
        </div>
        
    )
}