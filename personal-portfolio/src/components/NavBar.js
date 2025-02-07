import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import nimselogo from '../assets/img/Logo3.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import whatsappIcon from '../assets/img/whatsapp-icon.png'; 
import "../styles/Navbar.css"; 

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <Router>
      <Navbar expand="md" className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <img src={nimselogo} alt="Nimse Tech" className="navbar-logo" />
          </Navbar.Brand>

          {/* Toggle Icons */}
          {!menuOpen ? (
            <AiOutlineMenu className="menu-icon" onClick={() => setMenuOpen(true)} />
          ) : (
            <AiOutlineClose className="close-icon" onClick={() => setMenuOpen(false)} />
          )}
        </Container>
      </Navbar>

      {/* Fullscreen Mobile Menu */}
      <div className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}>
        <Nav className="menu-items">
          <Nav.Link 
            href="#home" 
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('home')}
          >
            Home
          </Nav.Link>
          <Nav.Link 
            href="#skills" 
            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('skills')}
          >
            Services
          </Nav.Link>
          <Nav.Link 
            href="#projects" 
            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('projects')}
          >
            Projects
          </Nav.Link>
        </Nav>
        <div className="social-icons-container">
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
        <HashLink to='#connect'>
          <button className="vvd"><span>Contact Us</span></button>
        </HashLink>
      </div>

      {/* WhatsApp Icon (Hidden When Menu is Open)
      <div className={`whatsapp-icon ${menuOpen ? "hide" : ""}`}>
        <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div> */}
    </Router>
  );
};
