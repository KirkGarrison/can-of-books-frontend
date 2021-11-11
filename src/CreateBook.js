import { Component } from "react";
import Button from 'react-bootstrap/Button'
import Carousel from "react-bootstrap/Carousel";

export default class CreateBook extends Component {

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     const title = event.target.formTitle.value
    //     const description = event.target.formDescription.value
    //     const author = event.target.formAuthor.value
    //     const status = event.target.formStatus.value
    //     let newBookObj = { title, description, author, status,};
    //     event.target.reset();
    //     this.props.postBooks(newBookObj);
    // }

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
            </Carousel.Caption>
            </>
        )
    }

}