/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */

import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';

import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import hobbieIcon1 from '../assets/img/hobbie1.png';
import hobbieIcon2 from '../assets/img/hobbie2.png';
import hobbieIcon3 from '../assets/img/hobbie3.png';
import hobbieIcon4 from '../assets/img/hobbie4.png';
import hobbieIcon5 from '../assets/img/hobbie5.png';
import hobbieIcon6 from '../assets/img/hobbie6.png';

export const Banner = () => {
  return (
    <section className="banner" id="aboutme">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={15} md={10} xl={7}>
          <TrackVisibility partialVisibility once>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>          
                <h1>{`Hello! I'm Alan,`}</h1>
                <TypeAnimation
                  sequence={[
                    'A Cybersecurity Engineer',
                    1000,
                    'A Full Stack Developer',
                    1000,
                    'A Software Engineer', 
                    1000, 
                    'A Programmer', 
                    1000,
                    'A Computer Engineer', 
                    1000,
                    'A Software Developer', 
                    1000,
                    () => {
                      console.log('Done typing!'); // Place optional callbacks anywhere in the array
                    }
                  ]}
                  wrapper="h1"
                  speed={50}
                  cursor={true}
                  repeat={Infinity}
                  deletionSpeed={90}
                />
                <h3>{`About Me`}</h3>
          
                <p>My passion for electronics and problem-solving started at a young age when I began repairing remote-controlled toys. In middle school, my curiosity led me to gaming, and a challenge from my father pushed me toward programming. What started as an attempt to understand how games were developed soon became a lifelong passion. I created a Pac-Man game using JavaScript and progressively expanded my expertise across multiple programming languages.</p>
                <p>During my time at Illinois Institute of Technology, I collaborated with talented peers to develop a gesture-controlled Smart Mirror with face recognition and IoT capabilities, which earned us third place in the ECE-Day Competition. This project deepened my interest in Computer Vision, IoT, and Cybersecurity, leading me to further explore the intersection of these fields.</p>
                <p>Now, as an Associate Application Development Analyst at Genworth, I am focused on developing software solutions, automating processes, and optimizing data workflows. With a strong foundation in software development, cybersecurity, and data science, I am eager to continue learning, sharing knowledge, and building meaningful professional relationships.</p>
                <p>Feel free to connect with me!</p>
                <h2>Hobbies</h2>
                <div className="hobbie-icon">
                <a><img src={hobbieIcon1} alt="" /></a>
                <a><img src={hobbieIcon3} alt="" /></a>
                <a><img src={hobbieIcon6} alt="" /></a>
                <a><img src={hobbieIcon4} alt="" /></a>
                <a><img src={hobbieIcon2} alt="" /></a>
                <a><img src={hobbieIcon5} alt="" /></a>
              </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility partialVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="header">
                    <img id="optionalstuff1" src={headerImg} alt="Header-Img"/>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
