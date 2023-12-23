import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Korotky1 from '../../img/Korotky/Korotky1.jfif';
import Korotky2 from '../../img/Korotky/Korotky2.jfif';
import Korotky3 from '../../img/Korotky/Korotky3.jpg';
import { useTranslation } from "react-i18next";

export function Slider(){

    const {t} = useTranslation();

    return(
        <>
            <Carousel className="carusel" >
                <CarouselItem className="carusel-item">
                    <img
                    className="d-block h-100 w-100"
                    src={Korotky1}
                    alt="Photo 1"
                    />
                    <Carousel.Caption>
                        {/* <h3>{t("gallery")}</h3> */}
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="carusel-item" >
                    <img style={{'object-fit' :'cover'}}
                    className="d-block h-100 w-100"
                    src={Korotky2}
                    alt="Photo 2"
                    />
                    <Carousel.Caption>
                        {/* <h3>{t("gallery")}</h3> */}
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="carusel-item" >
                    <img style={{'object-fit' :'cover'}}
                    className="d-block h-100 w-100"
                    src={Korotky3}
                    alt="Photo 3"
                    />
                    <Carousel.Caption>
                        {/* <h3>{t("gallery")}</h3> */}
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </>
    )
}