import React from "react";
import { Container } from "react-bootstrap";
import { Route, Router, Switch } from "react-router-dom";
import { DayPoet } from './DayPoet';
import { Header } from "./Header";
import { OtherLinks } from "./OtherLinks";
import "./main.css"

export function Home(){
    return(
        <div>  
            <div className="background"></div>
            <Container id="main-container">
                <Header />
                <DayPoet />
                <OtherLinks />
            </Container>
        </div>
    )
}