import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import nimselogo from '../assets/img/Logo3.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Row className="align-items-center">
            <Col xs={12} sm={6} className="d-flex align-items-center justify-content-center justify-content-sm-start mb-4 mb-sm-0">
              <img 
                src={nimselogo} 
                alt="Nimse Tech"
                style={{
                  height: '150px',
                  width: 'auto',
                  '@media (max-width: 768px)': {
                    height: '100px'
                  }
                }}
              />
            </Col>
            <Col xs={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61572978029153" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/nimsetech?igsh=bHl3anNvazE0MHVz" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
              <p>Copyright 2024. All Rights Reserved</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  )
}
