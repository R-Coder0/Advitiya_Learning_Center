import "../../styles/Gallery.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import review1 from '../../assets/Reviews/Baby Rani.png'
import review2 from '../../assets/Reviews/Himashu Sharma.png'
import review3 from '../../assets/Reviews/Jatin Khurana.png'
import review4 from '../../assets/Reviews/manasvi Sharma.png'
import review5 from '../../assets/Reviews/som dutt.png'
import reviewIcon from '../../assets/Reviews/review icon.png'

// Dynamic Image Imports (for each area)
const areaImagesImport = import.meta.glob("../../assets/Gallery/Second/*.jpg");

// Function to resolve image paths asynchronously
const formatImages = async (importedImages) => {
  const images = await Promise.all(
    Object.keys(importedImages).map(async (key) => {
      const imageUrl = await importedImages[key]();
      return {
        url: imageUrl.default,
        alt: "Gallery Image",
      };
    })
  );
  return images;
};

const GallerySection = () => {
  const [areaImages, setAreaImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null); // Use a ref for the slider container

  // Load images asynchronously on component mount
  useEffect(() => {
    (async () => {
      const images = await formatImages(areaImagesImport);
      setAreaImages(images);
    })();
  }, []);

  // Auto-scroll the slider horizontally for desktop
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 250; // Scroll 250px to the right every 3 seconds
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollLeft = 0; // Reset to start when reaching the end
        }
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Open image modal
  const openImageModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % areaImages.length);
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentIndex((currentIndex + areaImages.length - 1) % areaImages.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Behaviour Modification Classes</h2>
          <nav className="breadcrumb">
            <FaHome className="breadcrumb-icon" /> {/* Home icon */}
            <Link to="/">Home</Link> &gt;
             <span>Behaviour Modification Classes</span>
          </nav>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="gallery-slider">
        <div className="slider" ref={sliderRef}>
          {areaImages.length > 0 ? (
            areaImages.map((image, index) => (
              <div key={index} className="slider-image" onClick={() => openImageModal(index)}>
                <img src={image.url} alt={image.alt} />
              </div>
            ))
          ) : (
            <p>Loading images...</p>
          )}
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

      {/* Modal for Image Display */}
      {modalOpen && (
        <div className="gallery-modal-backdrop">
          <div className="gallery-modal-content">
            <button onClick={closeModal} className="gallery-modal-close-btn">✖</button>
            <button onClick={prevImage} className="gallery-modal-nav-btn prevbtn">〈</button>
            <img
              src={areaImages[currentIndex].url}
              alt={areaImages[currentIndex].alt}
              className="gallery-modal-image"
            />
            <button onClick={nextImage} className="gallery-modal-nav-btn nextbtn">〉</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
