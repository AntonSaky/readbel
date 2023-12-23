import React from "react";




export function Map(){
    return(    
        <div className="map">
            <iframe style={{borderRadius : "7px"}} src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa5547aac031e3f17b46650f7cd92ad47d34074369b884337de108f6f5407e565&amp;source=constructor" width="400" height="300" frameborder="0"></iframe>
        </div>
    )
}