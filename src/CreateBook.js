import { Component } from "react";
import Button from 'react-bootstrap/Button'
import Carousel from "react-bootstrap/Carousel";
import UpdateButton from "./UpdateButton";
import UpdateBookModal from "./UpdateBookModal";

export default class CreateBook extends Component {

    render() {
        return (
            <>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                    alt={this.props.book.title}
                />
                <Carousel.Caption>
                    <h3>{this.props.book.title}</h3>
                    <p>{this.props.book.description}</p>
                    <p>{this.props.book.status}</p>
                    <Button variant="secondary" onClick={() => this.props.deleteBooks(this.props.book._id)}>Delete Book</Button>
                    <UpdateButton openUpdateModal={this.props.openUpdateModal} />
                    <UpdateBookModal book={this.props.book} putBooks={this.props.putBooks} show={this.props.showUpdateModal} closeUpdateModal={this.props.closeUpdateModal} />
                </Carousel.Caption>
            </>
        )
    }
}