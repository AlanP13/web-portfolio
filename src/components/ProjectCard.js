/* eslint-disable jsx-a11y/alt-text */

import { Col } from "react-bootstrap";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  Car1,
  hrefURL,
}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
      <Col size={12} sm={6} md={3}>
        <div onClick={handleShow} className="proj-imgbx" >
          <img src={imgUrl} alt='project' />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
                <a className="carousel-item-img" target="_blank" rel="noopener noreferrer" href={hrefURL}>
                  <img
                    className="d-block w-100"
                    src={Car1}
                    alt="First slide"
                    
                  />
                </a>
          </Modal.Body>
        </Modal>
      </Col>
    </>
  );
};