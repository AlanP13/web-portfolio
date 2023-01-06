import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

import CoverC1 from "../assets/img/projects/convo-care-s1.png";
import designC1 from "../assets/img/projects/convo-care-s2.png";
import CoverC2 from "../assets/img/projects/cert-web-dev-s1.png";
import designC2 from "../assets/img/projects/cert-web-dev-s2.png";
import CoverC3 from "../assets/img/projects/prj-web-portfolio.png";
import designC3 from "../assets/img/projects/inprogress.png";
import CoverC4 from "../assets/img/projects/cert-game-designer-s1.png";
import designC4 from "../assets/img/projects/cert-game-designer-s2.png";
import CoverC5 from "../assets/img/projects/cert-web-security-s1.png";
import designC5 from "../assets/img/projects/inprogress.png";
import CoverC6 from "../assets/img/projects/cert-python-bootcamp-s1.png";
import designC6 from "../assets/img/projects/cert-python-bootcamp-s2.png";

import CoverP1 from "../assets/img/projects/mlpy.png";
import designP1 from "../assets/img/projects/mlpycourse1.png";
import CoverP2 from "../assets/img/projects/systemprogram.png";
import designP2 from "../assets/img/projects/systemprogramcourse1.png";
import CoverP3 from "../assets/img/projects/datastruct.png";
import designP3 from "../assets/img/projects/datastructcourse1.png";
import CoverP4 from "../assets/img/projects/cert-aws.png";
import designP4 from "../assets/img/projects/cert-aws.png";
import CoverP5 from "../assets/img/projects/cert-c++.png";
import designP5 from "../assets/img/projects/cert-c++.png";
import CoverP6 from "../assets/img/projects/cert-powershell-master.png";
import designP6 from "../assets/img/projects/cert-powershell-master.png";
import CoverP7 from "../assets/img/projects/cert-androidn-dev.png";
import designP7 from "../assets/img/projects/cert-androidn-dev.png";
import CoverP8 from "../assets/img/projects/cert-mysql-bootcamp.png";
import designP8 from "../assets/img/projects/cert-mysql-bootcamp.png";
import CoverP9 from "../assets/img/projects/os.png";
import designP9 from "../assets/img/projects/oscourse1.png";
import CoverP10 from "../assets/img/projects/cert-git-github.png";
import designP10 from "../assets/img/projects/cert-git-github.png";

import CoverE1 from "../assets/img/projects/prj-ece485-s1.png";
import designE1 from "../assets/img/projects/ece485-s2.png";
import CoverE2 from "../assets/img/projects/prj-ece442-s1.png";
import designE2 from "../assets/img/projects/ece442-s2.png";
import CoverE3 from "../assets/img/projects/prj-ece441-s1.png";
import designE3 from "../assets/img/projects/ece441-s2.png";
import CoverE4 from "../assets/img/projects/digitalsystem.png";
import designE4 from "../assets/img/projects/digitalsystemcourse1.png";
import CoverE5 from "../assets/img/projects/digitalcomput.png";
import designE5 from "../assets/img/projects/digitalcomputcourse1.png";
import CoverE6 from "../assets/img/projects/cert-photoshop.png";
import designE6 from "../assets/img/projects/cert-photoshop.png";
import CoverE7 from "../assets/img/projects/cert-archi-blender.png";
import designE7 from "../assets/img/projects/cert-archi-blender.png";
import CoverE8 from "../assets/img/projects/cert-blender3d.png";
import designE8 from "../assets/img/projects/cert-blender3d.png";
import CoverE9 from "../assets/img/projects/cert-complete-iot.png";
import designE9 from "../assets/img/projects/cert-complete-iot.png";
import CoverE10 from "../assets/img/projects/home-automation-s1.png";
import designE10 from "../assets/img/projects/home-automation-s2.png";

import CoverS1 from "../assets/img/projects/intro-cybersecurity.png";
import designS1 from "../assets/img/projects/intro-cybersecuritycourse1.png";
import CoverS2 from "../assets/img/projects/cyberforensics.png";
import designS2 from "../assets/img/projects/cyberforensicscourse1.png";
import CoverS3 from "../assets/img/projects/computernetwork.png";
import designS3 from "../assets/img/projects/computernetworkcourse1.png";
import CoverS4 from "../assets/img/projects/cert-network-security.png";
import designS4 from "../assets/img/projects/cert-network-security.png";
import CoverS5 from "../assets/img/projects/cert-end-point-protection.png";
import designS5 from "../assets/img/projects/cert-end-point-protection.png";
import CoverS6 from "../assets/img/projects/cert-anonymous-browsing.png";
import designS6 from "../assets/img/projects/cert-anonymous-browsing.png";
import CoverS7 from "../assets/img/projects/cert-hackers-exposed.png";
import designS7 from "../assets/img/projects/cert-hackers-exposed.png";
import CoverS8 from "../assets/img/projects/cert-network-security-fundamentals.png";
import designS8 from "../assets/img/projects/cert-network-security-fundamentals.png";

import CoverD1 from "../assets/img/projects/cert-unity-dev.png";
import designD1 from "../assets/img/projects/cert-unity-dev.png";
import CoverD2 from "../assets/img/projects/cert-unity-c-2d.png";
import designD2 from "../assets/img/projects/cert-unity-c-2d.png";
import CoverD3 from "../assets/img/projects/cert-unity-c-3d.png";
import designD3 from "../assets/img/projects/cert-unity-c-3d.png";
import CoverD4 from "../assets/img/projects/cert-unity-c.png";
import designD4 from "../assets/img/projects/cert-unity-c.png";
import CoverD5 from "../assets/img/projects/cert-unity-c-mobile.png";
import designD5 from "../assets/img/projects/cert-unity-c-mobile.png";
import CoverD6 from "../assets/img/projects/cert-unreal4.png";
import designD6 from "../assets/img/projects/cert-unreal4.png";
import CoverD7 from "../assets/img/projects/cert-unreal5.png";
import designD7 from "../assets/img/projects/cert-unreal5.png";
import CoverD8 from "../assets/img/projects/hawkstudy.png";
import designD8 from "../assets/img/projects/hawkstudycourse1.png";
import CoverD9 from "../assets/img/projects/wilson.png";
import designD9 from "../assets/img/projects/wilsoncourse1.png";
import CoverD10 from "../assets/img/projects/cert-rwhtml.png";
import designD10 from "../assets/img/projects/cert-rwhtml.png";

AOS.init();

export const Projects = () => {
  const current = [
    {
      title: "Web Portfolio",
      description: "October'22~Present",
      imgUrl: CoverC3,
      Car1: designC3,
      hrefURL: "https://github.com/AlanP13/web-portfolio",
    },    
    {
      title: "Convo Care",
      description: "August'22~Present",
      imgUrl: CoverC1,
      Car1: designC1,
      hrefURL: "",
    },
    {
      title: "Web Development Bootcamp",
      description: "October'22~Present",
      imgUrl: CoverC2,
      Car1: designC2,
      hrefURL: "https://github.com/AlanP13/Webpage",
    },
    {
      title: "Python Bootcamp",
      description: "December'22~Present",
      imgUrl: CoverC6,
      Car1: designC6,
      hrefURL: "https://github.com/AlanP13/Python-Bootcamp",
    },
    {
      title: "Web Security & Bug Bounty",
      description: "December'22~Present",
      imgUrl: CoverC5,
      Car1: designC5,
      hrefURL: "https://www.udemy.com/course/web-security-and-bug-bounty-learn-penetration-testing/learn/lecture/27166340?start=0#content",
    },
    {
      title: "Unity Game Designer",
      description: "December'22~Present",
      imgUrl: CoverC4,
      Car1: designC4,
      hrefURL: "",
    },

  ];

  const programming = [
    {
      title: "Machine Learning",
      description: "August'22~December'22",
      imgUrl: CoverP1,
      Car1: designP1,
      hrefURL: "https://github.com/AlanP13/ECE590-Machine-Learning-with-OOP/tree/main/Projects",
    },  
    {
      title: "System Programming",
      description: "August'21~December'22",
      imgUrl: CoverP2,
      Car1: designP2,
      hrefURL: "https://github.com/AlanP13/CS351-Systems-Programming/tree/main/Source%20Code",
    },
    {
      title: "Data Structures & Algorithm",
      description: "May'20~August'20",
      imgUrl: CoverP3,
      Car1: designP3,
      hrefURL: "https://github.com/AlanP13/CS331-Data-Structures-and-Algorithms",
    },
    {
      title: "Operating Systems: XV6",
      description: "August'21~December'21",
      imgUrl: CoverP9,
      Car1: designP9,
      hrefURL: "https://github.com/AlanP13/CS450-Operating-Systems/tree/main/Labs",
    },
    {
      title: "Git & Github Masterclass",
      description: "Git & GitHub Complete Masterclass : Beginner to Git Expert",
      imgUrl: CoverP10,
      Car1: designP10,
      hrefURL: "https://www.udemy.com/certificate/UC-b79ad474-462d-4ca2-8bbb-a56da8b2dd85/",
    },
    {
      title: "Amazon Web Services",
      description: "AWS Certified (Solutions Architect, Developer, SysOps Administrator, Cloud Practitioner)",
      imgUrl: CoverP4,
      Car1: designP4,
      hrefURL: "https://www.udemy.com/certificate/UC-6604265b-6b90-4bfc-9193-f2f5df5f13d3/",
    },
    {
      title: "C++ Programming",
      description: "Beginning C++ Programming - From Beginner to Beyond",
      imgUrl: CoverP5,
      Car1: designP5,
      hrefURL: "https://www.udemy.com/certificate/UC-1a920da0-9f7f-4a8b-8c9c-e87e25bdcf9a/",
    },
    {
      title: "Powershell",
      description: "The Ultimate Windows PowerShell Scripting Course: A to Z",
      imgUrl: CoverP6,
      Car1: designP6,
      hrefURL: "https://www.udemy.com/certificate/UC-8ba0296c-25d5-45dc-8e45-13d3dbfe1e87/",
    },
    {
      title: "Android N Development",
      description: "The Complete Android N Developer Course",
      imgUrl: CoverP7,
      Car1: designP7,
      hrefURL: "https://www.udemy.com/certificate/UC-462de19e-c7e3-474a-938f-e1a5520aa934/",
    },
    {
      title: "MySQL Bootcamp",
      description: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
      imgUrl: CoverP8,
      Car1: designP8,
      hrefURL: "https://www.udemy.com/certificate/UC-f50fb45d-cce3-4d5c-ab4f-0dc957c30f3a/",
    },

  ];

  const designs = [ 
    {
      title: "MIPS Architecture",
      description: "August'22~December'22",
      imgUrl: CoverE1,
      Car1: designE1,
      hrefURL: "https://github.com/AlanP13/ECE485-Computer-Organization-and-Design/tree/main/Projects",
    },
    {
      title: "Smart Alarm System",
      description: "May'22~August'22",
      imgUrl: CoverE2,
      Car1: designE2,
      hrefURL: "https://github.com/AlanP13/ECE442-IoT-and-Cyber-Physical-Systems/tree/main/Project",
    },
    {
      title: "Through the Speculum",
      description: "January'22~May'22",
      imgUrl: CoverE3,
      Car1: designE3,
      hrefURL: "https://github.com/AlanP13/ECE441-Smart-and-Connected-Embedded-Systems/tree/main/Smart%20Mirror%20Project",
    },
    {
      title: "Digital Systems",
      description: "January'21~May'21",
      imgUrl: CoverE4,
      Car1: designE4,
      hrefURL: "https://github.com/AlanP13/ECE218-Digital-Systems",
    },
    {
      title: "Digital Computer and Computing",
      description: "January'21~May'21",
      imgUrl: CoverE5,
      Car1: designE5,
      hrefURL: "https://github.com/AlanP13/ECE242-Digital-Computer-Computing",
    },
    {
      title: "Home Automation",
      description: "April'18~January'19",
      imgUrl: CoverE10,
      Car1: designE10,
      hrefURL: "https://github.com/AlanP13/Arduino-Home-Automation",
    },
    {
      title: "IoT Build Guide",
      description: "Complete Guide to Build IOT Things from Scratch to Market",
      imgUrl: CoverE9,
      Car1: designE9,
      hrefURL: "https://www.udemy.com/certificate/UC-0b5f404f-5fe5-41f3-b0e5-387ae9762808/",
    },

    {
      title: "Adobe Photoshop",
      description: "Ultimate Adobe Photoshop Training: From Beginner to Pro",
      imgUrl: CoverE6,
      Car1: designE6,
      hrefURL: "https://www.udemy.com/certificate/UC-2b31710b-0301-49ac-8c34-4fcdda5e42de/",
    },
    {
      title: "Blender 3D",
      description: "Blender 3D from zero to hero",
      imgUrl: CoverE7,
      Car1: designE7,
      hrefURL: "https://www.udemy.com/certificate/UC-07417308-1076-4c9e-87b1-8c5804eda788/",
    },
    {
      title: "Animations in Blender",
      description: "Architectural Design & Animation in Blender 3x",
      imgUrl: CoverE8,
      Car1: designE8,
      hrefURL: "https://www.udemy.com/certificate/UC-ae1f9027-af28-41fb-a2b6-a55f092fe592/",
    },
  ];

  const security = [   
    {
      title: "Cybersecurity in Data",
      description: "August'22~December'22",
      imgUrl: CoverS1,
      Car1: designS1,
      hrefURL: "https://github.com/AlanP13/ECE518-Intro-Computer-Cybersecurity/tree/main/Projects",
    }, 
    {
      title: "Cyber Forensics",
      description: "August'22~December'22",
      imgUrl: CoverS2,
      Car1: designS2,
      hrefURL: "https://github.com/AlanP13/ITMS538-Cyber-Forensics",
    },
    {
      title: "Network Architectures",
      description: "January'22~May'22",
      imgUrl: CoverS3,
      Car1: designS3,
      hrefURL: "https://github.com/AlanP13/ECE407-Introduction-Computer-Networking/tree/main/Lab",
    },
    {
      title: "Fundamental of Network Security",
      description: "December'22~January'22",
      imgUrl: CoverS8,
      Car1: designS8,
      hrefURL: "https://www.udemy.com/certificate/UC-da8105ff-979c-4af7-8916-02703db13354/",
    },
    {
      title: "Network Security",
      description: "The Complete Cyber Security Course : Network Security",
      imgUrl: CoverS4,
      Car1: designS4,
      hrefURL: "https://www.udemy.com/certificate/UC-ea98d809-625b-4135-a8b9-f53b8f17aa91/",
    },
    {
      title: "End Point Protection",
      description: "The Complete Cyber Security Course : End Point Protection",
      imgUrl: CoverS5,
      Car1: designS5,
      hrefURL: "https://www.udemy.com/certificate/UC-51abd1e0-beda-416b-be56-52eda287ab1a/",
    },
    {
      title: "Anonymous Browsing",
      description: "The Complete Cyber Security Course : Anonymous Browsing",
      imgUrl: CoverS6,
      Car1: designS6,
      hrefURL: "https://www.udemy.com/certificate/UC-2c996392-cdd6-40e4-a8c8-4e9fb28e1095/",
    },
    {
      title: "Hackers Exposed",
      description: "The Complete Cyber Security Course : Hackers Exposed",
      imgUrl: CoverS7,
      Car1: designS7,
      hrefURL: "https://www.udemy.com/certificate/UC-e689d139-975d-428c-9d45-75827d8a4b79/",
    },
  ];

  const development = [   
    
    {
      title: "Wilson Golf Solution",
      description: "January'22~May'22",
      imgUrl: CoverD9,
      Car1: designD9,
      hrefURL: "https://github.com/AlanP13/IPRO497-Design-and-Entrepreneur",
    },
    {
      title: "Hawk Study",
      description: "January'21~May'21",
      imgUrl: CoverD8,
      Car1: designD8,
      hrefURL: "https://github.com/AlanP13/IPRO497-AP-Digital-Development",
    },
    {
      title: "Responsive Website Development",
      description: "October'22~December'22",
      imgUrl: CoverD10,
      Car1: designD10,
      hrefURL: "https://github.com/AlanP13/Webpage",
    },
    {
      title: "Unity Game Development",
      description: "The Complete Unity Game Development Course",
      imgUrl: CoverD1,
      Car1: designD1,
      hrefURL: "https://www.udemy.com/certificate/UC-9b886e22-6a6c-4093-b48b-e810df298b6b/",
    },
    {
      title: "Unity 2D",
      description: "Complete C# Unity Game Developer 2D",
      imgUrl: CoverD2,
      Car1: designD2,
      hrefURL: "https://www.udemy.com/certificate/UC-427a30a4-b4b8-4a51-9a09-c4b335f8e99c/",
    },
    {
      title: "Unity 3D",
      description: "Complete C# Unity Game Developer 3D",
      imgUrl: CoverD3,
      Car1: designD3,
      hrefURL: "https://www.udemy.com/certificate/UC-d1c020f3-da91-4002-9f0a-7bbd0e02203d/",
    },
    {
      title: "Unity C# Development",
      description: "RPG Core Combat Creator: Learn Intermediate Unity C# Coding",
      imgUrl: CoverD4,
      Car1: designD4,
      hrefURL: "https://www.udemy.com/certificate/UC-638b2a0f-a748-49c3-9792-f20d15419817/",
    },
    {
      title: "Unity Mobile Development",
      description: "Unity C# Mobile Game Development - Make 3 Games From Scratch",
      imgUrl: CoverD5,
      Car1: designD5,
      hrefURL: "https://www.udemy.com/certificate/UC-d1d3da4a-47bb-44d9-9c05-3dffd61fc525/",
    },
    {
      title: "Complete Unreal Development",
      description: "Unreal Engine 4 C++ The Ultimate Game Developer Course",
      imgUrl: CoverD6,
      Car1: designD6,
      hrefURL: "https://www.udemy.com/certificate/UC-a186baa4-778c-4e83-9356-86d32e9fb577/",
    },
    {
      title: "Beginner Unreal Game Development",
      description: "Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games",
      imgUrl: CoverD7,
      Car1: designD7,
      hrefURL: "https://www.udemy.com/certificate/UC-a648cec7-513d-4df3-9993-c4483f17db94/",
    },
  ];

  const research = [   
  ];

  return (

    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects & Certifications</h2>
              <p>Below are the projects I have worked on either personally or collaborated in teams. Dobule click on the slides to view the repository or the certificate.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first" >Current</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Programming</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Designs</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Security</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth" >Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth" disabled={true}>Research</Nav.Link>
                  </Nav.Item>
                  
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row data-aos="fade-up">
                      {current.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row data-aos="fade-up">
                      {programming.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row data-aos="fade-up">
                      {designs.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Row data-aos="fade-up">
                      {security.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <Row data-aos="fade-up">
                      {development.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <Row data-aos="fade-up">
                      {research.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};