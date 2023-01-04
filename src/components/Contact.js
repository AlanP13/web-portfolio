import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = ({onValidated}) => {

  const [email, setEmail] = useState('');
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const sendEmail = (e) => {

    e.preventDefault();
    setButtonText("Sending...");

    const handleSubmit = (d) => {
      e.preventDefault();
      email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      })
    }

    emailjs.sendForm('service_m0tlq39', 'template_jxkgbzi', form.current, '6r9uQ0I50lUYPRnC2')

    .then(async (result) => {
      console.log(result.text);
      console.log("Message Sent");
      setButtonText("Successful");
      await delay(5000);
      setButtonText("Send");

    }, async (error) => {
      console.log(error.text);
      setButtonText("Unsuccessful");
      await delay(5000);
      setButtonText("Send");
    }
    );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility partialVisibility once>{({ isVisible }) =><img className={isVisible ? "animate__animated animate__fadeIn" : ""} src={contactImg} alt="Contact Us"/>}</TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility partialVisibility once>{({ isVisible }) =><div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>Let's Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <label>Name</label>
                      <input type="text" name="user_name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <label>Email</label>
                      <input type="email" name="user_email" value ={email} onChange={(d)=> setEmail (d.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <label>Phone-No (Optional)</label>
                      <input type="tel" name="user_number" />
                   </Col>
                    <Col size={12} sm={6} className="px-1">
                      <label>Message</label>
                      <textarea rows="1" name="message" />
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>)
  }