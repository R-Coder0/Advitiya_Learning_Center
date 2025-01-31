import React from "react";
import review1 from '../assets/Reviews/Baby Rani.png';
import review2 from '../assets/Reviews/Himashu Sharma.png';
import review3 from '../assets/Reviews/Jatin Khurana.png';
import review4 from '../assets/Reviews/manasvi Sharma.png';
import review5 from '../assets/Reviews/som dutt.png';
import reviewIcon from '../assets/Reviews/review icon.png';

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
