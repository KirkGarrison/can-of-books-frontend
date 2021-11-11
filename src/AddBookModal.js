import { Component } from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export default class AddBookModal extends Component {

    handleSubmit= (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const author = e.target.author.value;
        let status = 'read'
        if (!e.target.read.checked) {
            status = 'unread'
        }
        this.props.postBooks({author, title, description, status})
        this.props.closeModal()
    }



    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Book!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="The Hobbit" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Once... A short man lived in a hill" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="author">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="J.R.R. Tolkein" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="status">
                            <Form.Check
                            inline
                            label="read"
                            name="group1"
                            type="radio"
                            id="read"
                            />
                             <Form.Check
                            inline
                            label="unread"
                            name="group1"
                            type="radio"
                            id="unread"
                            />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Add!
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

        )
    }

}