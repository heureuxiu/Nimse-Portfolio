import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col } from 'react-bootstrap';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Services</h2>
              <p className="skill-text">We offer comprehensive digital solutions to help your business grow</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Website Development" />
                  <h5>Website Development</h5>
                  <p>Custom websites, E-commerce solutions, CMS development</p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Mobile App Development" />
                  <h5>Mobile App Development</h5>
                  <p>iOS & Android apps, Cross-platform solutions</p>
                </div>
                <div className="item">
                  <img src={meter3} alt="UI/UX Design" />
                  <h5>Graphics Designing</h5>
                  <p>Logo design, Brand identity, Marketing materials</p>
                </div>
                <div className="item">
                  <img src={meter1} alt="Digital Marketing" />
                  <h5>Digital Marketing</h5>
                  <p>SEO, Social Media Marketing, Content Strategy</p>
                </div>
                <div className="item">
                  <img src={meter2} alt="AWS/Domain Hosting" />
                  <h5>AWS/Domain Hosting</h5>
                  <p>Cloud solutions, Domain management, Server maintenance</p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
