import "../../styles/Gallery.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Dynamic Image Imports (for each area)
const areaImagesImport = import.meta.glob("../../assets/Gallery/First/*.jpg");

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
          <h2>NIOS Classes</h2>
          <nav className="breadcrumb">
            <FaHome className="breadcrumb-icon" /> {/* Home icon */}
            <Link to="/">Home</Link> &gt;
             <span>NIOS Classes</span>
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
          <h3 className="testimonials-subheading">What Parents Say</h3>
          <div className="testimonial-list">
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Gaurav Dhaka</h4>
                  <p className="testimonial-time">a year ago</p>
                </div>
                <img
                  src="https://via.placeholder.com/20"
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  The best special school with dedicated staff and tailored
                  sessions for children with disabilities.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Yensh Nim</h4>
                  <p className="testimonial-time">a year ago</p>
                </div>
                <img
                  src="https://via.placeholder.com/20"
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  Exceptional school for special needs children offering
                  therapies for ASD, ADHD, and more.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Yensh Nim</h4>
                  <p className="testimonial-time">a year ago</p>
                </div>
                <img
                  src="https://via.placeholder.com/20"
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  Exceptional school for special needs children offering
                  therapies for ASD, ADHD, and more.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Yensh Nim</h4>
                  <p className="testimonial-time">a year ago</p>
                </div>
                <img
                  src="https://via.placeholder.com/20"
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  Exceptional school for special needs children offering
                  therapies for ASD, ADHD, and more.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Abhishek Rajput</h4>
                  <p className="testimonial-time">a year ago</p>
                </div>
                <img
                  src="https://via.placeholder.com/20"
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  The support and encouragement my child receives from Advitiya
                  is unmatched. The staff is dedicated and compassionate.
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
