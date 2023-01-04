import React from "react";
import { Chrono } from "react-chrono";

import 'animate.css';

import ithena from "../assets/img/richmond.png";
import iit from "../assets/img/iit.png";
import mumbai from "../assets/img/mumbai.png";

export const Experience =() => {

  const items = [{
    title: "Jun 2017 - May 2019",
    cardTitle: "Fr. Agnel Multipurpose School and Jr. College",
    },
    {
    title: "Aug 2019 - May 2023",
    cardTitle: "Illinois Institute of Technology",
    },
    {
    title: "Jun 2020 - Aug 2020",
    cardTitle: "ITHENA PVT. LTD.",
    },
    {
    title: "Aug 2021 - Present",
    cardTitle: "Illinois Institute of Technology",
    },
    {
    title: "Aug 2022 - Present",
    cardTitle: "Eta Kappa Nu [HKN]",
    },
];

return (
    <section className="experience" id="experiences">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="experience-bx wow zoomIn">
                         <h2>{`Education and Experience`}</h2>
                          <div style={{ width: '100%', height: 'auto' }}>
                            <Chrono items={items} mode="HORIZONTAL" cardPositionHorizontal="BOTTOM"
                            theme={{
                              cardBgColor: '#151515',
                              cardForeColor: 'violet',
                              titleColor: '#B8B8B8',
                              titleColorActive: 'white',
                              secondary: 'linear-gradient(90.21deg, rgba(162, 96, 192, 0.5) -5.91%, rgba(55, 34, 146, 0.5) 111.58%)',
                              primary: '#7f4a97',
                              
                            }}
                            cardHeight={500}
                            slideItemDuration={3000}
                            slideShow={true}
                            itemWidth={"300"}
                            borderLessCards={true}
                            buttonTexts={{
                              first: 'Jump to First',
                              last: 'Jump to Last',
                              next: 'Next',
                              previous: 'Previous',
                            }}
                            fontSizes={{
                              cardSubtitle: '1rem',
                              cardText: '1rem',
                              cardTitle: '1.5rem',
                              title: '1rem',
                            }}
                            >
                            <div className="item">
                              <h3>Student</h3>
                              <p>Highschool in Navi Mumbai, India. Studied in the Science stream focusing in Computer Science.</p>
                              <p><h4>Relevant Coursework:</h4></p>
                              <p>x86 Machine programming language, 8085, C++, Visual Basic, Network Architecture, Physics, Chemistry, Mathematics.</p>
                                  <div class="overlay">
                                    <img id="optionalstuff" src={mumbai} alt="Background" />
                                  </div>
                            </div>
                            <div className="item">
                              <h3>Computer Engineering and Cybersecurity</h3>
                              <h4>M.S. Graduate Student in Computer Engineering specializing in Cybersecurity</h4>
                              <h4>B.S. Undergraduate Student in Computer and Cybersecurity Engineering</h4>
                              <p><h4>Relevant Coursework:</h4> 	Computer Cybersecurity, Data Structures and Algorithms, Machine Learning, Computer Networking, Computer Architecture and Embedded Systems, Internet of Things, and Application Development</p>
                                  <div class="overlay">
                                    <img id="optionalstuff" src={iit} alt="Background" />
                                  </div>
                            </div>
                            <div className="item">
                              <h3>Full Stack Developer Intern</h3>
                              <p>Worked under the supervision of a Senior Software Engineer in the Product Development department, designed an IoT Street Lamp using C# and MQTT communication layers for rapid data transfer</p> 
                              <p>Write technical guideline, test report and user manual.</p>
                              <p>Configured TCP layer communication without utilizing the IFTT platform with the design team and implemented a webpage using JS, CSS, and HTML in accordance with the company competition</p>
                              <p>Work together with team in design, coding, testing, or exploring new network techniques.</p>
                                  <div class="overlay">
                                    <img id="optionalstuff" src={ithena} alt="Background" />
                                  </div>
                            </div>
                            <div className="item">
                              <h3>Student Assistant</h3>
                              <p>Cooperate to quickly communicate residents' needs and problems with the resident advisor and other accredited staff members</p>
                              <p>Providing the highest level of customer service by welcoming residents and guests upon arrival, offering help, and responding to inquiries in a polite and professional manner, while ensuring the safety and security of the building.</p>
                              <p>Keeping an eye on the status of the buildings, furnishings, and equipment, and reporting issues when they arise.</p>
                                  <div class="overlay">
                                    <img id="optionalstuff" src={iit} alt="Background" />
                                  </div>
                            </div>
                            <div className="item">
                              <h3>Internal Secretary</h3>
                              <p>Cooperate to quickly communicate residents' needs and problems with the resident advisor and other accredited staff members.</p>
                              <p>Providing the highest level of customer service by welcoming residents and guests upon arrival, offering help, and responding to inquiries in a polite and professional manner, while ensuring the safety and security of the building.</p>
                              <p>Keeping an eye on the status of the buildings, furnishings, and equipment, and reporting issues when they arise.</p>
                                  <div class="overlay">
                                    <img id="optionalstuff" src={iit} alt="Background" />
                                  </div>
                            </div>
                            </Chrono>
                            
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}