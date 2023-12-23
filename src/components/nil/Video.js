import React from "react";
import { Container } from "react-bootstrap";



export function Video(){
    return(    
        <div className="video">
            <iframe style={{borderRadius : "7px"}} width="400" height="300" src="https://www.youtube.com/embed/aIAJ_02aDd8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}