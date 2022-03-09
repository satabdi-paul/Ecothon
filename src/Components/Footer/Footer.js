import React from 'react';
import { Container, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Logo from '../../Assets/GCI.png';
import styles from '../../CSS/Footer.module.css';
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaGithub,
} from 'react-icons/fa';
// import { BiCopyright } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Jumbotron className={styles.Jumbotron}>
      <Container className={styles.ContainerFooter}>

        <Row className={styles.Top1}>
          <Col className={styles.ContactCol} style={{ textAlign: 'center' }}>
            <h5> Contact Us </h5>
            <div className={styles.Rectangle3}></div>
          </Col>
        </Row>

        <Row className={(styles.Top1, styles.ContactRow)}>
          <p>
            {' '}
            <GrMail /> ecokonnect.org@gmail.com{' '}
          </p>
        </Row>

        <Row className={styles.Bottom1}>
          <Col>
            <p>
              &copy; {new Date().getFullYear()} Ecokonnect | All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Footer;
