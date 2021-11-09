import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateBook extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const bookTitle = event.target.formTitle.value
        const bookDescription = event.target.formDescription.value
        const bookAuthor = event.target.formAuthor.value
        const bookStatus = event.target.formStatus.value
        const bookEmail = event.target.formEmail.value
        console.log(bookTitle, bookDescription, bookAuthor, bookStatus, bookEmail);
    }

    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="name" placeholder="Enter book Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="name" placeholder="Enter book description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="name" placeholder="Enter book Author" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="name" placeholder="Enter book Status" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="name" placeholder="Enter account email" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
            </Form>
            </div>
        )
    }

}