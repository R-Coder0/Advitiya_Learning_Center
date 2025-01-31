import "../../styles/Gallery.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Testimonials from "../../components/Testimonial";

// Dynamic Image Imports (for each area)
const areaImagesImport = import.meta.glob("../../assets/Gallery/Fourth/*.jpg");

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
          <h2>Physical Therapy</h2>
          <nav className="breadcrumb">
            <FaHome className="breadcrumb-icon" /> {/* Home icon */}
            <Link to="/">Home</Link> &gt;
            <span>Physical Therapy</span>
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
      <Testimonials />

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
