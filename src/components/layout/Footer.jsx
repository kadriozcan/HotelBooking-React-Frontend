import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 footer mt-md-5">
      <Container>
        <Row>
          <Col xs={12} md={12} className="text-center">
            <p className="mb-0">&copy; HotelBooking</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
