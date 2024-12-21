import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdown when the menu is closed
    if (!isMenuOpen) {
      setIsGalleryDropdownOpen(false);
    }
  };

  const togglePopup = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the menu if it's open
    }
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Advitiya Rehabilitation and Learning Center" />
        </div>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
          <Link to="/services" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/getinvolved" onClick={toggleMenu}>
          Get Involved
          </Link>

          {/* Dropdown for Gallery */}
          <div
            className="dropdown"
            onMouseEnter={() => setIsGalleryDropdownOpen(true)}
            onMouseLeave={() => setIsGalleryDropdownOpen(false)}
          >
            <span
              className="dropbtn"
              onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)}
            >
              Gallery
            </span>
            {isGalleryDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/gallery/area1" onClick={toggleMenu}>
                  Remedial classes
                </Link>
                <Link to="/gallery/area2" onClick={toggleMenu}>
                  Behaviour Modification classes
                </Link>
                <Link to="/gallery/area3" onClick={toggleMenu}>
                  {" "}
                  Speech and Language Therapy
                </Link>
                <Link to="/gallery/area4" onClick={toggleMenu}>
                  Physical Therapy
                </Link>
                <Link to="/gallery/area5" onClick={toggleMenu}>
                  NIOS classes
                </Link>
                <Link to="/gallery/area6" onClick={toggleMenu}>
                  {" "}
                  Educational and Psychological testing
                </Link>
                <Link to="/gallery/area7" onClick={toggleMenu}>
                  Co-curricular activities{" "}
                </Link>
                <Link to="/gallery/area8" onClick={toggleMenu}>
                  ADL & Soft skills{" "}
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>

        <button className="donate-btn" onClick={togglePopup}>
          Donate Now
        </button>
        <div className="contact-info">
          <FaPhoneAlt className="phone-icon" />
          <div className="contact-details">
            <p>CONTACT US</p>
            <a href="tel:+919205370640">+91 9205370640</a>
          </div>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content">
            <h2>Make a Difference</h2>
            <p>
              Your donation helps us support and empower differently-abled
              students. Thank you for your generosity!
            </p>
            <Link to="/donate" className="donate-link" onClick={togglePopup}>
              Proceed to Donate
            </Link>
            <button className="close-popup" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
