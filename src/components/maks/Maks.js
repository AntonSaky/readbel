import React, { useState } from "react";
import { Slider } from "./Slider";
import {LineTime} from './LineTime'
import { PoetInfo } from "./PoetInfo";
import { Map } from "./Map";
import { Video } from "./Video";
import { Container } from "react-bootstrap";
import './poet.css'


export function Maks(){
    return(
        <div>
            <div className="background"></div>
            <Container id="poet-container">
                <PoetInfo /> 
                <LineTime/>
                <div className="footer">
                    <Slider/>
                    <div className="map-video">
                        <Map/>
                        <Video/>
                    </div>
                    
                </div>
                
            </Container>
        </div>
        
       
    )
}