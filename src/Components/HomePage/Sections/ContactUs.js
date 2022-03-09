import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaPencilAlt } from 'react-icons/fa';
import axios from 'axios';
import { Jumbotron, Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from '../../../CSS/ContactUs.module.css';

export default function ContactUs() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/f/mnqwvwor',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <Jumbotron
      id="contact"
      style={{ paddingTop: '0px', backgroundColor: '#ffffff' }}
    >
      <Container fluid="sm">
        <h1 className={styles.Heading}>
        <span style={{ color: '#29ab87' }}> Get In Touch</span>
        </h1>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: '50px' }}
        >
          <Col lg={5}>
            <Form onSubmit={handleSubmit}>
              <Form.Group style={{ display: 'flex' }}>
                <span className={styles.iconSpan}>
                  <FaUserAlt className={styles.contactIcon} />
                </span>
                <Form.Control
                  type="text"
                  name="name"
                  defaultValue=""
                  placeholder="John Doe"
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                style={{ display: 'flex' }}
              >
                <span className={styles.iconSpan}>
                  <FaEnvelope className={styles.contactIcon} />
                </span>
                <Form.Control
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="john@example.com"
                  required
                />
              </Form.Group>
              <Form.Group style={{ display: 'flex' }}>
                <span className={styles.iconSpan}>
                  <FaPencilAlt className={styles.contactIcon} />
                </span>
                <Form.Control
                  as="textarea"
                  rows="5"
                  name="message"
                  defaultValue=""
                  placeholder="Message"
                  required
                />
              </Form.Group>
              <Form.Group style={{ display: 'flex' }}>
                <Button className={styles.Button} type="submit">
                  Send Message
                </Button>
                {serverState.status && (
                  <p className={!serverState.status.ok ? 'Error Msg' : ''}>
                    {serverState.status.msg}
                  </p>
                )}
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
