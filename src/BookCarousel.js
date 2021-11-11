import { Component } from "react"
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CreateBook from "./CreateBook";

export default class BookCarousel extends Component {

    handleClick = (id) => {
        this.props.deleteBooks(id);
    }

    render() {
        return (
            <Container>
            <Carousel>
               {this.props.books.map(book => <Carousel.Item key={book._id}><CreateBook deleteBooks={this.props.deleteBooks} putBooks={this.props.putBooks} book={book} openUpdateModal={this.props.openUpdateModal} closeUpdateModal={this.props.closeUpdateModal} showUpdateModal={this.props.showUpdateModal}/></Carousel.Item>)}       
            </Carousel>
            </Container>
        )
    }

}