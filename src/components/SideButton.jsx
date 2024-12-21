import "../styles/SideButton.css";
import { FaPhoneAlt, FaInstagram, FaYoutube } from 'react-icons/fa';

const SideButtons = () => {
  return (
    <>
      <a href="tel:+919205370640" className="Side-button call">
        <FaPhoneAlt />
      </a>
      <a href="https://www.youtube.com/@advitiyalearningcenter7956" className="Side-button whatsapp" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
      <a href="https://www.instagram.com/advitiya_learning_center/" className="Side-button instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </>
  );
};

export default SideButtons;
