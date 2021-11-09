import { Component } from "react"
import { Carousel } from "react-bootstrap"

export default class BookCarousel extends Component {

    render() {
        return (
            <Carousel>
                {/* // {this.state.books.map(book => <BookCarousel books={book}/>} */}
               {this.props.books.map(book => 
               <Carousel.Item key={book._id}>
                    <h1>{book.title}</h1>
                    <p>{book.description}</p>
                </Carousel.Item>)}
            </Carousel>
        )
    }



}