import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Nil1 from '../../img/Nil/Nil1.jpg';
import Nil2 from '../../img/Nil/Nil2.jpg';
import Nil3 from '../../img/Nil/Nil3.jpg';
import { useTranslation } from "react-i18next";

export function Slider(){

    const {t} = useTranslation();

    return(
        <>
            <Carousel className="carusel" >
                <CarouselItem className="carusel-item">
                    <img
                    className="d-block h-100 w-100"
                    src={Nil1}
                    alt="Photo 1"
                    />
                    <Carousel.Caption>
                        {/* <h3>{t("gallery")}</h3> */}
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="carusel-item" >
                    <img style={{'object-fit' :'cover'}}
                    className="d-block h-100 w-100"
                    src={Nil2}
                    alt="Photo 2"
                    />
                    <Carousel.Caption>
                        {/* <h3>{t("gallery")}</h3> */}
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="carusel-item" >
                    <img style={{'object-fit' :'cover'}}
                    className="d-block h-100 w-100"
                    src={Nil3}
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