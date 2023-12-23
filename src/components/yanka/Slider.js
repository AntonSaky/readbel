import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Yanka1 from '../../img/Yanka/Янка1.jpg';
import Yanka2 from '../../img/Yanka/Янка3.jpg';
import Yanka3 from '../../img/Yanka/Янка2.jfif';
import { useTranslation } from "react-i18next";

export function Slider(){

    const {t} = useTranslation();

    return(
        <>
            <Carousel className="carusel" >
                <CarouselItem className="carusel-item">
                    <img
                    className="d-block h-100 w-100"
                    src={Yanka1}
                    alt="Photo 1"
                    />
                    <Carousel.Caption>
                        {/* <h3>{t("gallery")}</h3> */}
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="carusel-item" >
                    <img style={{'object-fit' :'cover'}}
                    className="d-block h-100 w-100"
                    src={Yanka2}
                    alt="Photo 2"
                    />
                    <Carousel.Caption>
                        {/* <h3>{t("gallery")}</h3> */}
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="carusel-item" >
                    <img style={{'object-fit' :'cover'}}
                    className="d-block h-100 w-100"
                    src={Yanka3}
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