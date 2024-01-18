import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import avataaar from '../assets/img/avataaar.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*<MailchimpForm />*/}
          <Col size={12} sm={6}>
            <img src={avataaar} alt="avataaar"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sneha-qb/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
              <a href="https://www.instagram.com/snehaabiswas" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
