import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Yakub1 from '../../img/Yakub/Якуб4.jpg';
import Yakub2 from '../../img/Yakub/Якуб2.jpg';
import Yakub3 from '../../img/Yakub/Якуб4.jfif';
import { useTranslation } from "react-i18next";

export function Slider(){

    const {t} = useTranslation();

    return(
        <>
            <Carousel className="carusel" >
                <CarouselItem className="carusel-item">
                    <img
                    className="d-block h-100 w-100"
                    src={Yakub1}
                    alt="Photo 1"
                    />
                    <Carousel.Caption>
                        {/* <h3>{t("gallery")}</h3> */}
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="carusel-item" >
                    <img style={{'object-fit' :'cover'}}
                    className="d-block h-100 w-100"
                    src={Yakub2}
                    alt="Photo 2"
                    />
                    <Carousel.Caption>
                        {/* <h3>{t("gallery")}</h3> */}
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="carusel-item" >
                    <img style={{'object-fit' :'cover'}}
                    className="d-block h-100 w-100"
                    src={Yakub3}
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