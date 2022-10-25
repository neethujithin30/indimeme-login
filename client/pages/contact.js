import React from "react";
import styles from "../styles/Contact.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
function contact() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.contact} z>
          <h1>Contact</h1>
          <h3>
            For more information, or to work with us,
            <br /> get in touch!
            <br /> We'd love to hear from you.
          </h3>
          <br />
          <p>
            <strong>Company Name:</strong> Memes Inc.
            <br />
            <strong>
              Address:
              <br />
            </strong>
            8216 Lankershim Blvd. Unit #12
            <br />
            North Hollywood, CA 91605
            <br />
            <strong>Phone: 818.696.3184</strong>
            <br />
            <strong>Email:</strong> contact@memes.com
            <br />
          </p>
        </div>
      <Form>
        <h2>Send Message</h2>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> 
      </div>
    </div>
  );
}
export default contact;
