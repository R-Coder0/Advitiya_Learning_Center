import "../styles/ComingSoon.css";
import { FaHome, FaPenNib, FaFileAlt, FaPaintBrush, FaVideo, FaFacebook, FaTasks, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetInvolvedPlaceholder = () => {
  const cardData = [
    {
      title: "Content Writing",
      description:
        "Crafting compelling articles, blog posts, and educational materials to raise awareness about neurodevelopmental disorders and special education.",
      icon: <FaPenNib className="card-icon" style={{ fontSize: "2rem", color: "#e74c3c" }} />,
    },
    {
      title: "Content Creation",
      description:
        "Developing visually appealing and engaging materials, including brochures, flyers, and presentations.",
      icon: <FaFileAlt className="card-icon" style={{ fontSize: "2rem", color: "#f1c40f" }} />,
    },
    {
      title: "Graphic Design",
      description: "Designing creative assets for campaigns, events, and social media.",
      icon: <FaPaintBrush className="card-icon" style={{ fontSize: "2rem", color: "#3498db" }} />,
    },
    {
      title: "Video Editing",
      description:
        "Editing videos for our workshops, awareness drives, and online educational initiatives.",
      icon: <FaVideo className="card-icon" style={{ fontSize: "2rem", color: "#9b59b6" }} />,
    },
    {
      title: "Social Media Management",
      description:
        "Managing social media platforms to spread awareness and engage with our community effectively.",
      icon: <FaFacebook className="card-icon" style={{ fontSize: "2rem", color: "#2980b9" }} />,
    },
    {
      title: "Other Related Roles",
      description:
        "Contributing to various creative and strategic activities aligned with the center's vision.",
      icon: <FaTasks className="card-icon" style={{ fontSize: "2rem", color: "#2ecc71" }} />,
    },
  ];

  return (
    <>
      <section className="get-involved-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Get Involved</h1>
          <nav className="breadcrumb">
            <FaHome className="breadcrumb-icon" /> {/* Home icon */}
            <Link to="/">Home</Link> &gt;
            <span>Get Involved</span>
          </nav>
        </div>
      </section>
      <div className="coming-soon">
        <div className="container">
          <h1>Internship and Volunteering Opportunities at Advitiya Learning Centre</h1>
          <p>
            Advitiya Learning Centre is dedicated to fostering an inclusive environment where individuals can gain meaningful experience while contributing to the development of children with special needs. We offer enriching internship and volunteering opportunities both online and offline to empower individuals with practical skills, knowledge, and a sense of fulfillment.
          </p>
        </div>

        <h2>Volunteering Opportunities</h2>
        <p className="section-description">
          Our volunteering program primarily focuses on offline roles that support our mission of creating impactful content and managing various creative tasks. We welcome volunteers in the following areas:
        </p>

        <section className="cards-container">
          {cardData.map((card, index) => (
            <div key={index} className="card">
              {card.icon}
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </section>

        <div className="internship">
          <h2>Internship Opportunities</h2>
          <p>
            Our internship program is meticulously designed for students pursuing psychology, special education, sociology, and related fields. Interns gain hands-on exposure to understanding neurodevelopmental disorders such as autism spectrum disorders, ADHD, and specific learning disorders. Training includes designing effective behavior intervention plans, speech therapy techniques, and occupational therapy methods.
          </p>

          <h2>Eligibility Criteria</h2>
          <ul className="criteria-list">
            <li> <span>Must be a student or recent graduate in psychology, special education, sociology, or a related field.</span></li>
            <li> <span>Should have a strong passion for working with children with special needs and a commitment to making a positive impact.</span></li>
            <li> <span>Must be respectful and empathetic towards each child.</span></li>
            <li> <span>Basic knowledge of neurodevelopmental disorders is preferred but not mandatory, as training will be provided.</span></li>
            <li> <span>Good communication and teamwork skills to collaborate effectively with our team and families.</span></li>
          </ul>

          <h2>Why Choose Advitiya Learning Centre</h2>
          <ul className="benefits-list">
            <li> <span className="inline-span">Expert Guidance:</span> Work alongside experienced RCI-licensed special educators and therapists.</li>
            <li> <span className="inline-span">Comprehensive Training:</span> Gain practical exposure to real-world scenarios and case studies.</li>
            <li> <span className="inline-span">Holistic Learning Environment:</span> Immerse yourself in a supportive atmosphere dedicated to the growth and well-being of children with special needs.</li>
            <li> <span className="inline-span">Community Impact:</span> Be a part of meaningful initiatives that positively impact the lives of children and their families.</li>
          </ul>
        </div>
       
        <h2>How to Apply?</h2>
        <p className="head">(Subject to being edited as the process finalizes.)</p>
        <p>
          To apply for our internship or volunteering programs, simply fill out the application form available on our website or contact us at [insert contact details]. Our team will get in touch with you to discuss your interests and availability.
          Join us at Advitiya Learning Centre to make a difference while advancing your skills and knowledge. Whether you’re a student eager to learn or a professional looking to contribute, we have a place for you in our community!
        </p>
      </div>
    </>
  );
};

export default GetInvolvedPlaceholder;
