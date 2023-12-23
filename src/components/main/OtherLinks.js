import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function OtherLinks(){

    const{t} = useTranslation();

    return(
        <div>
            <div className="writers-works">
                
                    <ListGroup className="writers">
                        <h4>{t("listwriters-h")}</h4>
                        <ListGroup.Item  style={{border: 'none', display : 'inline'}}><Link to="/yanka">{t("writer-yanka")}</Link></ListGroup.Item>
                        <ListGroup.Item style={{border: 'none', display : 'inline'}}><Link to="/yakub">{t("writer-yakub")}</Link></ListGroup.Item>
                        <ListGroup.Item style={{border: 'none', display : 'inline'}}><Link to="/nil">{t("writer-nil")}</Link></ListGroup.Item>
                        <ListGroup.Item style={{border: 'none', display : 'inline'}}><Link to="/korotky">{t("writer-korotky")}</Link></ListGroup.Item>
                        <ListGroup.Item style={{border: 'none', display : 'inline'}}><Link to="/maks">{t("writer-maks")}</Link></ListGroup.Item>
                    </ListGroup>
                <div className="works-wrap">
                    
                    <div className="works">
                        <h4>{t("listworks-h")}</h4>
                        <ListGroup>
                            <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="https://knihi.com/Janka_Kupala/Mahila_lva_9t.html" target="_blank">{t("writer-yanka-i")} "Могила льва"</a></ListGroup.Item>
                            <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="https://knihi.com/Jakub_Kolas/Novaja_ziamla.html" target="_blank">{t("writer-yakub-i")} "Новая земля"</a></ListGroup.Item>
                            <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="http://gilevich.ru/vershy/rodnyya-dzetsi" target="_blank">{t("writer-nil-i")} "Родные дети"</a></ListGroup.Item>
                            <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="https://www.litmir.me/br/?b=314053&p=1" target="_blank">{t("writer-korotky-i")} "В шалаше"</a></ListGroup.Item>
                            <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="https://knihi.com/Maksim_Bahdanovic/Pohonia-rus.html" target="_blank">{t("writer-maks-i")} "Погоня"</a></ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div class="works" id="seccol">
                        <ListGroup>
                            <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="https://knihi.com/Janka_Kupala/Kurhan_9t.html" target="_blank">{t("writer-yanka-i")} "Курган"</a></ListGroup.Item>
                            <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="https://knihi.com/Jakub_Kolas/Symon-muzyka.html" target="_blank">{t("writer-yakub-i")} "Сымон-музыка"</a></ListGroup.Item>
                            <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="http://gilevich.ru/vershy/rodnae-slova" target="_blank">{t("writer-nil-i")} "Родное слово</a></ListGroup.Item>
                            <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="https://knihi.com/Uladzimir_Karatkievic/Dikaja_ochota_korola_Stacha-rus.html" target="_blank">{t("writer-korotky-i")} "Дикая охото короля стаха"</a></ListGroup.Item>
                            <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="https://stihi.ru/2013/08/03/3770" target="_blank">{t("writer-maks-i")} "Венок"</a></ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>     
        </div>
    )
}