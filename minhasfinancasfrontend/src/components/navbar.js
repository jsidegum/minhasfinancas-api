import React, { Component } from "react";
import NavbarItem from "./navbarItem";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container">
                    <a href="home.html" className="navbar-brand">Minhas Finanças</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <NavbarItem label="Home" href="#/home" />
                            <NavbarItem label="Usuários" href="#/cadastro-usuarios" />
                            <NavbarItem label="Lançamentos" href="#/lancamentos" />
                            <NavbarItem label="Login" href="#/login" />
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;