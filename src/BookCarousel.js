import { Component } from "react"
import { Carousel } from "react-bootstrap"

export default class BookCarousel extends Component {

    handleClick = (id) => {
        this.props.deleteBooks(id);
    }

    render() {
        return (
            <Carousel>
               {this.props.books.map(book => 
               <Carousel.Item key={book._id}>
                    <h1>{book.title} <span onClick={() => this.handleClick(book._id)}>X</span> </h1>
                    <p>{book.description}</p>
                </Carousel.Item>)}
            </Carousel>
        )
    }

}