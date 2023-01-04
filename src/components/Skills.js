/* eslint-disable jsx-a11y/img-redundant-alt */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import xmpp from "../assets/img/Skills/Light Purple/xmpp.svg";
import aws from "../assets/img/Skills/Dark Purple/amazon-web-services.svg";
import googlecloud from "../assets/img/Skills/Mid Purple/google-cloud-platform.svg";
import mysql from "../assets/img/Skills/Light Purple/mysql.svg";
import postgresql from "../assets/img/Skills/Dark Purple/postgresql.svg";
import php from "../assets/img/Skills/Mid Purple/php.svg";
import cplusplus from "../assets/img/Skills/Dark Purple/c++.svg";
import csharp from "../assets/img/Skills/Mid Purple/c-sharp-logo.svg";
import python from "../assets/img/Skills/Light Purple/python.svg";
import css3 from "../assets/img/Skills/Dark Purple/css3.svg";
import html from "../assets/img/Skills/Mid Purple/html-5.svg";
import ruby from "../assets/img/Skills/Light Purple/ruby-language.svg";
import java from "../assets/img/Skills/Dark Purple/java.svg";
import reactn from "../assets/img/Skills/Mid Purple/react-native.svg";
import angular from "../assets/img/Skills/Light Purple/angularjs.svg";
import studio from "../assets/img/Skills/Dark Purple/visual-studio.svg";
import unreal from "../assets/img/Skills/Mid Purple/unreal-engine.svg";
import unity from "../assets/img/Skills/Light Purple/unity.svg";
import anaconda from "../assets/img/Skills/Mid Purple/anaconda.svg";
import android from "../assets/img/Skills/Dark Purple/android-studio.svg";
import arduino from "../assets/img/Skills/Light Purple/arduino.svg";
import blender from "../assets/img/Skills/Dark Purple/blender-3d.svg";
import docker from "../assets/img/Skills/Mid Purple/docker.svg";
import git from "../assets/img/Skills/Light Purple/git.svg";
import github from "../assets/img/Skills/Dark Purple/github.svg";
import golang from "../assets/img/Skills/Dark Purple/golang.svg";
import javascript from "../assets/img/Skills/Mid Purple/javascript.svg";
import linux from "../assets/img/Skills/Mid Purple/linux.png";
import office from "../assets/img/Skills/Light Purple/office-365.svg";
import powershell from "../assets/img/Skills/Dark Purple/powershell.svg";
import raspberry from "../assets/img/Skills/Mid Purple/raspberry-pi.svg";
import stack from "../assets/img/Skills/Light Purple/stack-overflow.svg";
import sublime from "../assets/img/Skills/Dark Purple/sublime-text.svg";
import vmware from "../assets/img/Skills/Mid Purple/vmware.svg";
import wordpress from "../assets/img/Skills/Light Purple/wordpress.svg";
import swift from "../assets/img/Skills/Light Purple/swift.svg"

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
      items: 1
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
                            <img src={git} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">Git</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={css3} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">CSS 3</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={html} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">HTML 5</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={ruby} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">Ruby</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={java} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">JAVA</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={reactn} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">React Native</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={angular} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">Angular JS</div>
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
                              <img src={googlecloud} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">Google Cloud Platform</div>
                                  </div>
                            </div>
                            <div className="item">
                            <img src={mysql} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">MySQL</div>
                                  </div>
                            </div>
                            <div className="item">
                              <img src={github} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">GitHub</div>
                                  </div>
                            </div>
                            <div className="item">
                              <img src={docker} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">Docker</div>
                                  </div>
                            </div>
                            <div className="item">
                            <img src={arduino} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">Arduino</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={postgresql} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">PostgreSQL</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={php} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">PHP Server</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={xmpp} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">XMPP Platform</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={studio} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">Visual Studio</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={unreal} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">Unreal Engine</div>
                                  </div>
                            </div>
                           <div className="item">
                                <img src={unity} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">Unity</div>
                                  </div>
                            </div>
                        </Carousel>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} className="owl-carousel owl-theme skill-slider">  
                            <div className="item">
                              <img src={android} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">Android Studio Development</div>
                                  </div>
                            </div>
                            <div className="item">
                              <img src={linux} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">Linux OS</div>
                                  </div>
                            </div>
                            <div className="item">
                            <img src={office} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">MS Office</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={powershell} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">PowerShell/ CMD</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={raspberry} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">Raspberry Pi Projects</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={stack} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">Stack Overflow</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={blender} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">Blender 3D</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={anaconda} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">Anaconda</div>
                                  </div>
                            </div>
                           <div className="item">
                                <img src={swift} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">Swift App Development</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={sublime} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textd">Sublime Text</div>
                                  </div>
                            </div>
                            <div className="item">
                                <img src={vmware} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textm">VMware Virtualization</div>
                                  </div>
                            </div>
                           <div className="item">
                                <img src={wordpress} alt="Logo" />
                                  <div class="overlay">
                                      <div class="textl">Wordpress Web Development</div>
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