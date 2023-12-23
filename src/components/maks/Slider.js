import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Maks1 from '../../img/Maks/Maks1.jpg';
import Maks2 from '../../img/Maks/Maks2.jpg';
import Maks3 from '../../img/Maks/Maks3.jpg';
import { useTranslation } from "react-i18next";

export function Slider(){

    const {t} = useTranslation();

    return(
        <>
            <Carousel className="carusel" >
                <CarouselItem className="carusel-item">
                    <img
                    className="d-block h-100 w-100"
                    src={Maks1}
                    alt="Photo 1"
                    />
                    <Carousel.Caption>
                        {/* <h3>{t("gallery")}</h3> */}
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="carusel-item" >
                    <img style={{'object-fit' :'cover'}}
                    className="d-block h-100 w-100"
                    src={Maks2}
                    alt="Photo 2"
                    />
                    <Carousel.Caption>
                        {/* <h3>{t("gallery")}</h3> */}
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="carusel-item" >
                    <img style={{'object-fit' :'cover'}}
                    className="d-block h-100 w-100"
                    src={Maks3}
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