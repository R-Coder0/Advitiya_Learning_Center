import { Link } from "react-router-dom";
import "../styles/AboutUs.css"; // Ensure this file contains the styles
import aboutImage1 from "../assets/About/about.jpg";
import aboutImage2 from "../assets/About/about2.jpg"; // Replace with your image path
import { FaEye, FaHome,  FaBook, FaChalkboardTeacher, FaHandsHelping, FaTools  } from "react-icons/fa";
import { BsThermometer, BsPeopleFill, BsBrush, BsBriefcase } from "react-icons/bs";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import aboutus from "../assets/About/Rita.jpeg";
import aboutus2 from "../assets/aboutsection2.jpg";
import Testimonials from "../components/Testimonial";

const AboutHeroSection = () => {
  const [count, setCount] = useState(0);

  // Counter animation effect
  useEffect(() => {
    let start = 0;
    const end = 60; // Final number you want to count to
    const speed = 50; // Lower is faster

    const step = () => {
      start += Math.ceil(end / speed);
      if (start >= end) {
        setCount(end);
      } else {
        setCount(start);
        requestAnimationFrame(step);
      }
    };

    step();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
          <nav className="breadcrumb">
            <FaHome className="breadcrumb-icon" /> {/* Home icon */}
            <Link to="/">Home</Link> &gt;
            <span>About Us</span>
          </nav>
        </div>
      </section>
      {/* About Us */}
      <section className="about-us-section">
        <div className="about-container">
          <div className="about-images">
            <img
              src={aboutImage1}
              alt="About Us Image 1"
              className="about-img-1"
            />
            <img
              src={aboutImage2}
              alt="About Us Image 2"
              className="about-img-2"
            />
          </div>
          <div className="stats">
            <h2>{count}+</h2> {/* Counter with animation */}
            <p>Students</p>
          </div>
          <div className="about-content">
            <h2>ABOUT US</h2>
            <h3>Advitiya Rehabilitation and Learning Center</h3>
            <p>
              Founded in 2021 and based in Sector 2, Rohini, Delhi, Advitiya Rehabilitation and Learning Center is a sanctuary for children with special needs and their families. Our mission is to provide holistic, individualized therapeutic and educational support to empower children to navigate life’s challenges with confidence, independence, and self-worth. By blending specialized therapies, academic support, life skills training, and vocational activities, we prepare children not only for daily tasks but also for life itself.
            </p>
            <p>
              <b>Our Moto</b>: "Empowering the Next Generation of Leaders"<br />
              At Advitiya, we believe that every child has the potential to be a leader in their own unique way. Through patience, perseverance, and personalized care, we aim to unlock their abilities, enabling them to thrive in every aspect of life.
            </p>
            <div className="vision-section">
              <div className="vision-icon">
                <FaEye size={30} color="var(--primary-color)" />
              </div>
              <div className="vision-content">
                <h3>Vision</h3>
                <p>
                  We envision a world where every child, regardless of their abilities or challenges, is given equal opportunities to grow, learn, and succeed. At Advitiya, we work toward creating an inclusive society that celebrates the individuality and unique contributions of children with special needs. Our vision extends beyond therapy and education; we seek to empower these children to lead fulfilling lives, equipped with the skills they need to excel personally, socially, and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quotes */}
      <section className="quote-section">
        <div className="quote-overlay">
          <h2>“Every child beholds importance to us”</h2>
          <p>
            In this era of high competition and increased exposure to the
            technology, it’s no more a big deal for the students to keep
            themselves updated for their job opportunities and career pursuits.
            So, to be in this rat race, we need to start our preparation at an
            early stage and thus to prepare its student for the global stage
            Advitiya learning center has started vocational courses, via NIOS,
            at school level.
          </p>
        </div>
      </section>
      {/* Mission */}
      <section className="mission-section">
        <h2 className="mission-title">Our Mission: Supporting Growth, Building Futures</h2>
        <p>
          Our mission is to provide comprehensive support that spans therapy, education, and emotional development.
          We are dedicated to enhancing the lives of children with special needs and their families by fostering a
          nurturing environment where they can reach their full potential. Through a multidisciplinary approach,
          we address every aspect of a child's development, from motor skills to communication and social interaction.
        </p>
        <div className="mission-content">
          <ul className="mission-list">
            <li>
              To set the spirit of freedom inherent in every child with special needs (CWSN), discovering their hidden talents and potential.
            </li>
            <li>
              To provide individualized education plans that focus on enhancing the abilities of differently-abled students through innovative and personalized approaches.
            </li>
            <li>
              To create a warm and inclusive environment where students feel a sense of belonging and are motivated to achieve their fullest potential.
            </li>
            <li>
              To empower students to become as independent as possible, enabling them to perform daily living activities on their own.
            </li>
            <li>
              To provide vocational skills training through creative activities such as Lippan art, resin art, mug painting with mandala and polymer clay,
              t-shirt painting, rakhi making, and more. These activities foster creativity, enhance fine motor skills, and promote independence.
            </li>
            <li>
              To offer specially designed therapies and behavioral programs that support behavior modification, creativity, language, communication, and managing behavioral issues.
            </li>
            <li>
              To foster an inclusive community by promoting awareness and advocacy for the rights of differently-abled individuals within society.
            </li>
          </ul>
        </div>
        <div className="core-values">
          <h3 className="mission-title">Core Values</h3>
          <ul className="mission-list">
            <li>
              Compassion and Patience: We approach every child with empathy and patience, understanding the unique challenges they face.
            </li>
            <li>
              Inclusivity: We foster a supportive environment where every child feels valued, included, and encouraged to succeed.
            </li>
            <li>
              Collaboration: We believe in working closely with families, schools, and communities to provide the best possible outcomes for our students.
            </li>
            <li>
              Growth Mindset: We celebrate every achievement, no matter how small, and continually work toward further progress.
            </li>
          </ul>
        </div>
      </section>

      {/* About Section1 */}
{/* About Miss Rita Section */}
<section className="about-miss-rita-section">
  <div className="about-miss-rita-container">
    <div className="about-miss-rita-content">
      <h2 className="about-miss-rita-title">About Miss Rita</h2>
      <p>
        Ms. Rita exemplifies exceptional leadership through a harmonious blend
        of empathy, professionalism, and strategic acumen. Her calming presence
        and unwavering dedication inspire trust and confidence among children
        and staff alike, fostering an environment of clarity and assurance.
        Renowned for her meticulous organizational skills and thoughtful
        decision-making, she is deeply committed to the holistic development
        and empowerment of every child under her care.
        <br />
        <br />
        A visionary leader, Ms. Rita champions fairness, inclusivity, and
        collaboration within her team, cultivating a culture of trust and
        mutual respect. Her remarkable ability to observe and understand
        individual strengths and needs enables her to make well-informed,
        impactful decisions. During moments of challenge, she steps in with
        hands-on support, shielding her team and the children from obstacles
        while exemplifying grace under pressure.
        <br />
        <br />
        Ms. Rita’s leadership extends beyond managing tasks; she inspires
        action and instills purpose. Whether orchestrating therapeutic programs,
        advocating for progressive practices, or personally addressing critical
        tasks, she consistently sets a standard of excellence. Her nurturing
        yet pragmatic approach, paired with an unwavering attention to detail
        and a commitment to creating meaningful impact, has made her a beacon
        of professionalism and care. At Advitiya, Ms. Rita is more than a
        director—she is a mentor, a protector, and a driving force for
        transformational change.
      </p>
    </div>
    <div className="about-miss-rita-image">
      <img
        src={aboutus}
        alt="Miss Rita - Advitiya Rehabilitation and Learning Center"
      />
    </div>
  </div>
</section>

      {/* About Section2 */}
      <section className="home-about-section2">
        <div className="home-about-container2">
          <div className="home-about-content">
            <h2 className="home-about-title">About Ms. Priya Deshwal</h2>
            <p>
              About Ms. Priya Deshwal
              Ms. Priya Deshwal brings unparalleled dynamism to her role at Advitiya, seamlessly combining charisma, creativity, and precision. Her radiant positivity and tireless energy are matched only by her exceptional organizational skills and acute attention to detail. From flawlessly curated to-do lists to her artistic approach in meetings, Ms. Priya infuses structure and innovation into every initiative she undertakes.
              <br />
              <br />
              Her warmth and approachability make her a trusted confidant for staff and children, while her disciplined and structured methods command respect and foster accountability. Ms. Priya possesses a rare ability to balance compassionate engagement with firm guidance, ensuring that children thrive within a supportive yet structured environment. Her deep passion for empowering children with special needs is evident in her dedication to even the smallest details, which consistently elevate the quality of classroom activities, program coordination, and team collaboration.
            </p>
          </div>
          <div className="home-about-image">
            <img
              src={aboutus2}
              alt="Advitiya Rehabilitation and Learning Center"
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="leadership-section">
        {/* Description Card */}
        <div className="leadership-description">
          <img src={logo} alt="School Logo" className="description-logo" />
          <p className="description-text">
            Together, Ms. Rita and Ms. Priya form an extraordinary leadership team at Advitiya, united by their shared commitment to excellence and transformative impact. Ms. Rita’s visionary and nurturing leadership perfectly complements Ms. Priya’s dynamic energy and precision, creating a synergy that drives unparalleled results.
            <br />
            <br />
            Under their stewardship, Advitiya has become a model of care, innovation, and empowerment, where children are not only supported in their developmental journey but celebrated for their individuality. This formidable duo leads by example, inspiring their team and fostering an environment where professionalism, compassion, and excellence converge. With a relentless focus on delivering meaningful outcomes, Ms. Rita and Ms. Priya continue to set new benchmarks in the field, ensuring that Advitiya remains a beacon of hope and progress.
          </p>
        </div>
      </section>
      {/* Special Education */}
      <section className="special-education">
      <div className="container">
        <h2 className="section-heading">Special Education Programs</h2>
        <div className="programs">
          <div className="program-item">
            <FaBook className="program-icon" />
            <h4>Individualized Education Programs (IEPs)</h4>
            <p>
              Customized learning plans developed for each child, ensuring they
              receive personalized support.
            </p>
          </div>
          <div className="program-item">
            <FaChalkboardTeacher className="program-icon" />
            <h4>Differentiated Instruction</h4>
            <p>
              Adapting teaching methods to accommodate diverse learning styles
              and abilities.
            </p>
          </div>
          <div className="program-item">
            <FaHandsHelping className="program-icon" />
            <h4>Specialized Support Services</h4>
            <p>
              Speech therapy, occupational therapy, counseling, and social
              skills training to foster well-rounded development.
            </p>
          </div>
          <div className="program-item">
            <FaTools className="program-icon" />
            <h4>Assistive Technologies</h4>
            <p>
              Integrating the latest technologies to enhance learning,
              communication, and engagement.
            </p>
          </div>
        </div>

        <h2 className="section-heading">Ongoing Projects and Initiatives</h2>
        <div className="projects">
          <div className="project-item">
            <BsThermometer className="project-icon" />
            <h4>Therapeutic Support</h4>
            <p>
              Programs in speech therapy, occupational therapy, and Applied
              Behavior Analysis (ABA) to improve communication and motor skills.
            </p>
          </div>
          <div className="project-item">
            <BsPeopleFill className="project-icon" />
            <h4>Internship Programs</h4>
            <p>
              Collaborations with institutions like Zakir Husain Delhi College
              and Vision Institute for hands-on special education training.
            </p>
          </div>
          <div className="project-item">
            <BsBrush className="project-icon" />
            <h4>Co-Curricular Excellence</h4>
            <p>
              Activities like dance, music, drama, sports, creative artwork, and
              resin crafts.
            </p>
          </div>
          <div className="project-item">
            <BsBriefcase className="project-icon" />
            <h4>Entrepreneurship and Creative Skills</h4>
            <p>
              Students showcase and sell handmade diyas, candles, and keychains
              during events, fostering entrepreneurial skills.
            </p>
          </div>
        </div>
      </div>
    </section>
      <Testimonials/>
    </div>
  );
};

export default AboutHeroSection;
