import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import Navbar from 'react-bootstrap/Navbar';

import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import resume from '../assets/img/resume1.png';

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <Navbar.Brand href="https://alanp13.github.io/web-portfolio/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/18yNR_C_pi2Zavpq4PnRaI9Gns622Yasy/view?usp=sharing"><img src={resume} alt="" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alan-biju-palayil-37648199/"><img src={navIcon1} alt="" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlanP13"><img src={navIcon2} alt="" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alan.palayil/"><img src={navIcon3} alt="" /></a> 
            </div>

            <p>All graphics are personally drawn.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}