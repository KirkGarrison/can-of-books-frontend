import { Component } from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export default class UpdateBookModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: this.props.book
        }
    }

    handleSubmit= (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const author = e.target.author.value;
        let status = 'Read'
        if (!e.target.read.checked) {
            status = 'Unread'
        }
        console.log(this.props.book)
        let updatedBookObj = { title, description, author, status }
        console.log(updatedBookObj)
        this.props.putBooks(this.props.book._id, updatedBookObj)
        this.props.closeUpdateModal()
    }



    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.closeUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Book!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit} key={this.props.book}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.book.title}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} defaultValue={this.props.book.description}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="author">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.book.author} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="status">
                            <Form.Check
                            inline
                            label="Read"
                            name="group1"
                            type="radio"
                            id="read"
                            />
                             <Form.Check
                            inline
                            label="Unread"
                            name="group1"
                            type="radio"
                            id="unread"
                            />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Update!
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

        )
    }

}