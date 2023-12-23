import React from "react";
import { useTranslation } from "react-i18next";

export function Header(){
    const{t} = useTranslation();
    return(
            <p className="site-info">
                {t("main-info")}
            </p>    
    )
}