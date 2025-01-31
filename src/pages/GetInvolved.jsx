import { Link } from "react-router-dom";
import "../styles/ComingSoon.css";

const GetInvolvedPlaceholder = () => {
  return (
    <div className="coming-soon">
      <div className="coming-soon-container">
        <h1>Coming Soon</h1>
        <p>The Get Involved page is currently under maintenance.</p>
        <p>We’re working hard to bring you this feature soon!</p>
        <Link to="/" className="back-home-btn">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default GetInvolvedPlaceholder;
