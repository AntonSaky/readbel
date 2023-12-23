import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";


const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .navbar-link {
        color: #adb1b8;
        &:hover{
            color: white;
        }
    }
`

export function NaviBar() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <div className="all-nav-container">
                    <Container className="nav-container">
                        <Navbar.Brand className="brand"><Link to="/" style={{ color: "#DAA520", fontWeight: "bold" }}>ReadBel</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="nav">
                                <Nav.Link className="nav-link"><Link to="/">{t("nav-main")}</Link></Nav.Link>
                                <Nav.Link className="nav-link"><Link to="/listpoet" className="c-white">{t("nav-list")}</Link></Nav.Link>
                                <Nav.Link className="nav-link"><Link to="/about/anton">{t("nav-about")}</Link></Nav.Link>
                            </Nav>
                            <Nav className="nav">
                                <Button className="btn-ru" onClick={() => changeLanguage("ru")} >Рус</Button>
                                <Button className="btn-en" onClick={() => changeLanguage("en")}>Eng</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </div>
            </Navbar>

        </>
    )
}