import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-darl bg-dark">
                       
                        <Link to="/" className="navbar-brand">
                            <i className="fa fa-plus-circle">Cotisation App</i>
                        </Link>
                    </nav>
                </header>
            </div>
        )
    }
}
