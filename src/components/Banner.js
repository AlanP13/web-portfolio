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
                    'A Programmer', 
                    1000,
                    'A Full Stack Developer',
                    1000,
                    'A Cybersecurity Engineer',
                    1000, 
                    'A Game Developer',
                    1000,
                    'A Software Engineer', 
                    1000,
                    'A Web Developer', 
                    1000, 
                    'A Computer Engineer', 
                    1000,
                    'A Software Developer', 
                    1000,
                    'A Network Engineer',
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
          
                <p>My interest in electronics started at a very young age, my inquisitive mind helped me fix broken remote-controlled toys. In middle-school, while gaming, my dad challenged me to try and learn how the games were programmed and developed. I did not realize how that simple challenge would push my passion and goals into programming and software development. I started with JavaScript to develop a Pac-Man game and over time taught myself to code in other programming languages.</p>
                <p>At Illinois Tech, I had the opportunity to work with other talented minds. Our collective skills to create a gesture-controlled Smart Mirror with face-recognition and IoT nodes, enabled us to win the third place at the ECE-Day Competition, Illinois Tech. I took this project further to research on the applications of Computer Vision and Information Security within the IoT field.</p>
                <p>I look forward to begin my career and seek new skills, opportunities, share my knowledge and make great friendships.</p>
          
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