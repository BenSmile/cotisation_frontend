import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-darl bg-dark">
                        <div><a className="navbar-brand"> Cotisation App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
