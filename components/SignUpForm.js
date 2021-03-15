import React from 'react'
import { Button } from './Button';
import Form from 'react-bootstrap/Form'
import './SignUpForm.css'

function Signupform() {
    return (
        <div className='form-wrapper'>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    )
}

export default Signupform
