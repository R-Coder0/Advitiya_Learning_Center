import "../styles/HomePage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import aboutus from "../assets/aboutsection.jpg";
import aboutus2 from "../assets/aboutsection2.jpg";
import EnquiryModal from "../components/EnquiryModal";
import program1 from "../assets/Homepage/program1.jpg";
import program2 from "../assets/Homepage/program2.jpg";
import program3 from "../assets/Homepage/program3.jpg";
import service1 from "../assets/Homepage/service1.jpg";
import service2 from "../assets/Homepage/service2.jpg";
import service3 from "../assets/Homepage/service3.jpg";
import service4 from "../assets/Homepage/service4.jpg";
import hero1 from "../assets/Homepage/hero1.jpeg";
import hero2 from "../assets/Homepage/hero2.jpeg";
import hero3 from "../assets/Homepage/hero3.jpeg";
import review1 from '../assets/Reviews/Baby Rani.png';
import review2 from '../assets/Reviews/Himashu Sharma.png';
import review3 from '../assets/Reviews/Jatin Khurana.png';
import review4 from '../assets/Reviews/manasvi Sharma.png';
import review5 from '../assets/Reviews/som dutt.png';
import reviewIcon from '../assets/Reviews/review icon.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const programsData = [
  {
    id: 1,
    title: "Special Education Program",
    shortDescription:
      "Our Special Education Program focuses on individualized learning strategies to support each student's unique needs...",
    fullDescription: `
      <p>At Advitiya Learning Center, we are committed to creating an inclusive and nurturing educational environment through our Special Education Program. We employ a comprehensive approach that integrates multi-sensory techniques and differentiated instruction, ensuring that every student's unique learning needs are met.</p><br>
      <p>Our program modifies reading materials, offers varied assignments, and utilizes flexible grouping strategies to cater to diverse learning styles. We also integrate assistive technology and Universal Design for Learning (UDL) principles, ensuring equitable access to educational content for all students.</p><br>
      <p>To foster a positive learning atmosphere, we implement Positive Behavior Support (PBS) strategies that set clear expectations and routines, while promoting social skills development. Collaborative learning is encouraged through group work, peer tutoring, and cooperative tasks, enhancing engagement and peer interaction.</p><br>
      <p>Individualized Education Programs (IEPs) guide each student's personalized learning path, addressing both academic and emotional needs. Our program emphasizes functional skills training through real-life simulations and project-based learning (PBL), preparing students for practical problem-solving.</p><br>
      <p>Additionally, we offer Functional Communication Training for students with communication challenges and incorporate mindfulness and relaxation techniques to help manage stress and improve focus. By combining adaptive learning technologies with social-emotional learning (SEL) practices, we aim to develop our students' emotional intelligence and interpersonal skills, ensuring a holistic and effective educational experience.</p>`,
    image: program3,
  },
  {
    id: 2,
    title: "Therapy and Behavioral Support",
    shortDescription:
      "We offer comprehensive therapy sessions including speech, occupational, and behavioral modification classes...",
    fullDescription: `
      <p>At Advitiya Learning Center, our Therapy and Behavioral Support Program is meticulously designed to enhance the physical, emotional, and social well-being of our students. We provide a range of targeted therapies, including speech therapy to improve communication skills, occupational therapy to assist with daily living activities, and behavioral modification techniques to promote positive behavior.</p><br>
      <p>Each student's therapy plan is uniquely tailored to their specific needs and goals, ensuring a personalized approach that fosters growth and development. Our program also incorporates sensory integration strategies to help students manage sensory processing challenges effectively.</p><br>
      <p>Cognitive-behavioral therapy (CBT) is utilized to address emotional and psychological issues, while our social skills training sessions involve group activities and role-playing exercises to build confidence and improve interpersonal relationships.</p><br>
      <p>We understand the importance of a consistent therapeutic approach, which is why we work closely with families to ensure these strategies are implemented both at school and at home, creating a supportive and comprehensive care network.</p>`,
    image: program1,
  },
  {
    id: 3,
    title: "Vocational Training",
    shortDescription:
      "Equip students with practical skills through courses like Mandala Art, Lipan Art, and computer applications...",
    fullDescription: `
      <p>Our Vocational Training Program at Advitiya Learning Center is dedicated to preparing students for future employment and independent living. We offer a diverse array of courses, such as Mandala Art, Lipan Art, and computer applications, aimed at equipping students with practical skills that can be directly applied in real-world settings.</p><br>
      <p>This program is designed to build confidence and independence, teaching students how to perform tasks relevant to their interests and capabilities. Through hands-on training and real-life simulations, students gain the skills needed to excel in the workplace.</p><br>
      <p>Moreover, our program includes job coaching and placement services, assisting students in finding meaningful employment opportunities. We partner with local businesses and organizations to provide internships and job shadowing experiences, allowing students to apply their skills in supportive environments.</p><br>
      <p>By offering a comprehensive approach to vocational training, we empower our students to achieve their full potential and lead fulfilling lives.</p>`,
    image: program2,
  },
];
const services = [
  {
    title: "Individualized Learning Plans",
    description:
      "Customized education plans that cater to each student's learning style and pace.",
    image: service1,
  },
  {
    title: "Therapeutic Services",
    description:
      "Comprehensive therapy options including speech, occupational, and physical therapy.",
    image: service2,
  },
  {
    title: "Counseling and Support",
    description:
      "Mental health support services for students and their families to foster emotional well-being.",
    image: service3,
  },
  {
    title: "NIOS Classes",
    description:
      "Open schooling options through NIOS to help students achieve academic qualifications.",
    image: service4,
  },
  // Demo Services
  {
    title: "Vocational Training",
    description:
      "Hands-on training in various vocational skills to enhance employability.",
    image: service4,
  },
  {
    title: "Art Therapy",
    description:
      "Creative therapy sessions to encourage expression and emotional healing.",
    image: service3,
  },
  {
    title: "Music Therapy",
    description:
      "Music-based interventions to improve physical and emotional health.",
    image: service2,
  },
  {
    title: "Sports Activities",
    description:
      "Inclusive sports programs to develop physical fitness and teamwork skills.",
    image: service1,
  },
];
const renderProgramDescription = (description) => {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};

const Homepage = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false); // Add this if it was missing
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const openProgramModal = (program) => {
    setSelectedProgram(program);
    setShowEnquiryForm(false);
    setShowModal(true); // This will open the program modal
  };

  const openEnquiryForm = () => {
    setShowEnquiryForm(true);
  };

  const closeModal = () => {
    setSelectedProgram(null);
    setShowModal(false);
    setShowEnquiryForm(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="home-hero">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="hero-carousel"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${hero1})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="Hero-h1">Empowering Every Unique Ability</h1>
                  <p>
                    Join Advitiya Learning Center to create an inclusive world
                    through specialized education and support for
                    differently-abled students.
                  </p>
                  <div className="cta-buttons">
                    <Link to="/services" className="cta-button">
                      Get Involved
                    </Link>
                    <Link to="/about" className="cta-secondary-button">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${hero2})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="Hero-h1">Creating Inclusive Opportunities</h1>
                  <p>
                    Be a part of our mission to empower differently-abled
                    students with life skills and vocational training.
                  </p>
                  <div className="cta-buttons">
                    <Link to="/contact" className="cta-button">
                      Volunteer Now
                    </Link>
                    <Link to="/services" className="cta-secondary-button">
                      Explore Programs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${hero3})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="Hero-h1">Together, We Build Futures</h1>
                  <p>
                    Support Advitiya Learning Center to provide education, care,
                    and opportunities for children in need.
                  </p>
                  <div className="cta-buttons">
                    <Link to="/donate" className="cta-button">
                      Donate Now
                    </Link>
                    <Link to="/contact" className="cta-secondary-button">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* About Section1 */}
      <section className="home-about-section">
        <div className="home-about-container">
          <div className="home-about-content">
            <h2 className="home-about-title">Discover Our Mission</h2>
            <h3 className="home-about-subtitle">Who We Are</h3>
            <p>
              Advitiya Rehabilitation and Learning Center is a dedicated
              organization committed to transforming lives by empowering
              differently-abled individuals. We aim to create an inclusive
              environment where every individual can thrive, learn, and grow to
              their fullest potential.
            </p>
            <h3 className="home-about-subtitle">What We Offer</h3>
            <ul className="home-about-list">
              <li>
             <b>Tailored Programs:</b> Personalized therapy plans address each child's unique challenges and strengths.
              </li>
              <li>
            <b>Holistic Development:</b> We focus on the social, emotional, and physical growth of every child, nurturing well-rounded individuals.
              </li>
              <li>
             <b>Inclusive Environment:</b> We foster a nurturing, inclusive atmosphere where children feel supported and encouraged to achieve their best.
              </li>
              <li>
              <b>Life Skills Preparation:</b> Beyond therapy and academics, we equip children with the skills they need to navigate real-life challenges independently.
              </li>
            </ul>

            <a href="/about" className="home-about-button">
              Learn More
            </a>
          </div>
          <div className="home-about-image">
            <img
              src={aboutus}
              alt="Advitiya Rehabilitation and Learning Center"
            />
          </div>
        </div>
      </section>
      {/* About Section2 */}
      <section className="home-about-section2">
        <div className="home-about-container2">
          <div className="home-about-content">
            <h2 className="home-about-title">Building Brighter Futures</h2>
            <h3 className="home-about-subtitle">Our Vision</h3>
            <p>
              At Advitiya Rehabilitation and Learning Center, we envision a
              world where differently-abled individuals are empowered to live
              fulfilling and independent lives. Our goal is to foster an
              inclusive society where every individual has the opportunity to
              succeed and contribute.
            </p>
            <h3 className="home-about-subtitle">Opportunities for Improvement</h3>
            <ul className="home-about-list">
              <li>
              Teacher Training Program: We aim to develop training programs for teachers to better equip them to support children with special needs.
              </li>
              <li>
              Community Engagement and Awareness: We are committed to raising awareness in the local community about disability and inclusion, fostering a more accepting environment.
              </li>
              <li>
              Collaboration with Schools and Institutions: Advitiya is actively pursuing partnerships with more schools, companies, and educational institutions to expand our reach and provide even greater opportunities for children with special needs.
              </li>
            </ul>

            <a href="/about" className="home-about-button">
              Learn More
            </a>
          </div>
          <div className="home-about-image">
            <img
              src={aboutus2}
              alt="Advitiya Rehabilitation and Learning Center"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs fade-in">
        <div className="container">
          <h2>Our Programs</h2>
          <p className="program-intro">
            Discover our diverse range of programs designed to support the
            holistic development of our students, helping them succeed in all
            aspects of life.
          </p>
          <div className="program-list">
            {programsData.map((program) => (
              <div key={program.id} className="program-item card">
                <div className="program-img-wrapper">
                  <img src={program.image} alt={program.title} />
                </div>
                <div className="card-content">
                  <h3>{program.title}</h3>
                  <p>{program.shortDescription}</p>
                  <button
                    className="cta-button"
                    onClick={() => openProgramModal(program)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full Program Description */}
      {selectedProgram && !showEnquiryForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProgram.title}</h2>
            <img src={selectedProgram.image} alt={selectedProgram.title} />
            <button className="enquiry-button" onClick={openEnquiryForm}>
              Enquire Now
            </button>
            <div
              className="program-description"
              dangerouslySetInnerHTML={{
                __html: selectedProgram.fullDescription,
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Enquiry Form Modal */}
      {selectedProgram && showEnquiryForm && (
        <EnquiryModal
          showModal={showEnquiryForm}
          closeModal={closeModal}
          service={selectedProgram.title}
        />
      )}

      {/* Services Section */}
      <section className="homepage-services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Explore our wide range of specialized services tailored to the needs
            of differently-abled students.
          </p>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              300: {slidesPerView: 1},    
              400: {slidesPerView: 1},
              576: {slidesPerView: 2},
              640: { slidesPerView: 2 }, // 2 services on small screens
              768: { slidesPerView: 2 }, // 3 services on tablets
              1024: { slidesPerView: 3 }, // 4 services on medium screens
              1440: { slidesPerView: 4 },
            }}
            className="services-slider"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-card">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <Link to="/services" className="know-more-btn">
                      Know More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="testimonials-heading">Testimonials</h2>
          <div className="testimonial-list">
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src={review5}
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Som Dutt</h4>
                  <p className="testimonial-time">2 Month ago</p>
                </div>
                <img
                  src={reviewIcon}
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  Amazing place for therapy near me! The staff at Advitiya is
                  highly trained, and the services like counselling and speech
                  therapy are very effective.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src={review4}
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Manasvi Sharma</h4>
                  <p className="testimonial-time">2 month ago</p>
                </div>
                <img
                  src={reviewIcon}
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  I am working as an intern here and I’m extremely grateful to
                  Rita ma’am and Priya ma’am! The kids here are extremely
                  exceptional and welcoming.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src={review2}
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Himanshu Sharma</h4>
                  <p className="testimonial-time">a year ago</p>
                </div>
                <img
                  src={reviewIcon}
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  Well-behaved teachers and excellent management for each
                  student. Teachers are well-educated and polite in nature.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src={review1}
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Baby Rani</h4>
                  <p className="testimonial-time">2 month ago</p>
                </div>
                <img
                  src={reviewIcon}
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  Teachers are very hardworking. This school fosters a welcoming
                  and nurturing environment where students are encouraged to
                  grow both academically and personally.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src={review3}
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Jatin Khurana</h4>
                  <p className="testimonial-time">3 Week ago</p>
                </div>
                <img
                  src={reviewIcon}
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  The environment at Advitiya for kids is really healthy. I have
                  an acquaintance (kid) who goes there, and the confidence and
                  improvement I have seen in her is remarkable. Its the best
                  learning center for kids with special needs. If you know
                  someone or have a kid, this center is highly recommended.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
