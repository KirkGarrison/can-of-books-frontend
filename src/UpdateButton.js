import React, {  Component  } from "react";
import Button from "react-bootstrap/Button";

export default class Update extends Component {
    handleClick = () => {
        this.props.openUpdateModal()
    }
    render () {
        return (
            <Button onClick={this.handleClick}>
                Update this Book
            </Button>
        )
    }
}