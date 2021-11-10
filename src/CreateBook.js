import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateBook extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const title = event.target.formTitle.value
        const description = event.target.formDescription.value
        const author = event.target.formAuthor.value
        const status = event.target.formStatus.value
        const email = event.target.formEmail.value
        let newBookObj = { title, description, author, status, email };
        event.target.reset();
        this.props.postBooks(newBookObj);
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