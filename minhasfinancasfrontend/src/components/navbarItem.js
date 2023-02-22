import React, { Component } from 'react';

class NavbarItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href={this.props.href}>{this.props.label}</a>
            </li>
        );
    }
}

export default NavbarItem;