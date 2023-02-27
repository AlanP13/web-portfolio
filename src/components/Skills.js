/* eslint-disable jsx-a11y/img-redundant-alt */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import aws from "../assets/img/Skills/Dark Purple/amazon-web-services.svg";
import cplusplus from "../assets/img/Skills/Dark Purple/c++.svg";
import html from "../assets/img/Skills/Dark Purple/html-5.svg";
import github from "../assets/img/Skills/Dark Purple/github.svg";
import golang from "../assets/img/Skills/Dark Purple/golang.svg";
import stack from "../assets/img/Skills/Dark Purple/stack-overflow.svg";

import csharp from "../assets/img/Skills/Mid Purple/c-sharp-logo.svg";
import java from "../assets/img/Skills/Mid Purple/java.svg";
import anaconda from "../assets/img/Skills/Mid Purple/anaconda.svg";
import android from "../assets/img/Skills/Mid Purple/android-studio.svg";
import arduino from "../assets/img/Skills/Mid Purple/arduino.svg";
import javascript from "../assets/img/Skills/Mid Purple/javascript.svg";

import postgresql from "../assets/img/Skills/Light Purple/postgresql.svg";
import python from "../assets/img/Skills/Light Purple/python.svg";
import css3 from "../assets/img/Skills/Light Purple/css3.svg";
import reactn from "../assets/img/Skills/Light Purple/react-native.svg";
import studio from "../assets/img/Skills/Light Purple/visual-studio.svg";
import powershell from "../assets/img/Skills/Light Purple/powershell.svg";


export const Skills = () => {

    const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9
    },
    desktop: {
      breakpoint: { max: 3000, min: 2048 },
      items: 7
    },
    Largetablet: {
      breakpoint:{max:2048, min: 1024},
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Below is the skills and technologies, I have made myself familiar with over the years...</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true}  className="owl-carousel owl-theme skill-slider">  
                            <div className="item">
                              <img src={cplusplus} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">C++</div>
                                  </div>
                            </div>
                            <div className="item">
                              <img src={csharp} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">C#</div>
                                  </div>
                            </div>
                            <div className="item">
                            <img src={python} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">Python</div>
                                  </div>
                            </div>
                            <div className="item">
                              <img src={golang} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">Go Language</div>
                                  </div>
                            </div>
                            <div className="item">
                              <img src={javascript} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">JavaScript</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={css3} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">CSS 3</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={html} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">HTML 5</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={java} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">JAVA</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={reactn} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">React Native</div>
                                  </div>
                            </div>
                        </Carousel>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} className="owl-carousel owl-theme skill-slider">  
                            <div className="item">
                              <img src={aws} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">Amazon Web Services</div>
                                  </div>
                            </div>
                            <div className="item">
                              <img src={android} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">Android Studio Development</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={powershell} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">PowerShell/ CMD</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={stack} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">Stack Overflow</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={anaconda} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">Anaconda</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={studio} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">Visual Studio</div>
                                  </div>
                            </div>
                            <div className="item">
                              <img src={github} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">GitHub</div>
                                  </div>
                            </div>
                            <div className="item">
                            <img src={arduino} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">Arduino</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={postgresql} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">PostgreSQL</div>
                                  </div>
                            </div>
                        </Carousel>                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}