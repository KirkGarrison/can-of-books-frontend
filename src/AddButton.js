import React, {  Component  } from "react";
import Button from "react-bootstrap/Button";
// import { Navbar, NavItem } from 'react-bootstrap';
// import { Link } from "react-router-dom";

export default class AddButton extends Component {
    handleClick = () => {
        this.props.openModal()
    }
    render () {
        return (
            // <>
            // {this.props.user && <NavItem><Link to="/create" className="nav-link">Create</Link></NavItem>}
            <Button onClick={this.handleClick}>
                Add a Book
            </Button>
        )
    }
}