import "../styles/Gallery.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Import videos (handled manually)
import video1 from "../assets/Gallery/Video/VID_20230418_095324.mp4";
import video2 from "../assets/Gallery/Video/VID_20230418_095425.mp4";
import video3 from "../assets/Gallery/Video/video_20220611_112908.mp4";
import video4 from "../assets/Gallery/Video/video_20220611_115801.mp4";
import video5 from "../assets/Gallery/Video/video_20220614_115220.mp4";
import video6 from "../assets/Gallery/Video/video_20230413_125709.mp4";
import video7 from "../assets/Gallery/Video/video_20230413_130011.mp4";
import video8 from "../assets/Gallery/Video/video_20230413_130555.mp4";
import video9 from "../assets/Gallery/Video/video_20230717_113106.mp4";
import video10 from "../assets/Gallery/Video/VID-20240813-WA0036.mp4";
import video11 from "../assets/Gallery/Video/VID-20240813-WA0045.mp4";
import video12 from "../assets/Gallery/Video/VID-20240813-WA0047.mp4";
import video13 from "../assets/Gallery/Video/VID-20240828-WA0076.mp4";

// Dynamic Image Imports
const yogaImagesImport = import.meta.glob("../assets/Gallery/First/*.jpg");
const educationalImagesImport = import.meta.glob("../assets/Gallery/Second/*.jpg");
const summerCampImagesImport = import.meta.glob("../assets/Gallery/Third/*.jpg");
const artCraftImagesImport = import.meta.glob("../assets/Gallery/Fourth/*.jpg");
const vocationalTrainingImagesImport = import.meta.glob("../assets/Gallery/Fifth/*.jpg");

// Function to resolve image paths asynchronously
const formatImages = async (importedImages) => {
  const images = await Promise.all(
    Object.keys(importedImages).map(async (key) => {
      const imageUrl = await importedImages[key]();
      return {
        url: imageUrl.default, // Resolve the image URL
        alt: "Image", // Customize the alt text as needed
      };
    })
  );
  return images;
};

const GallerySection = () => {
  const [yogaImages, setYogaImages] = useState([]);
  const [educationalImages, setEducationalImages] = useState([]);
  const [summerCampImages, setsummerCampImages] = useState([]);
  const [artCraftImages, setArtCraftImages] = useState([]);
  const [vocationalTrainingImages, setVocationalTrainingImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMedia, setCurrentMedia] = useState(null); // Media can be image or video
  const [isVideo, setIsVideo] = useState(false); // To differentiate between images and videos

  // Load images asynchronously on component mount
  useEffect(() => {
    (async () => {
      const yogaImages = await formatImages(yogaImagesImport);
      setYogaImages(yogaImages);

      const educationalImages = await formatImages(educationalImagesImport);
      setEducationalImages(educationalImages);

      const summerCampImages = await formatImages(summerCampImagesImport);
      setsummerCampImages(summerCampImages);

      const artCraftImages = await formatImages(artCraftImagesImport);
      setArtCraftImages(artCraftImages);

      const vocationalTrainingImages = await formatImages(vocationalTrainingImagesImport);
      setVocationalTrainingImages(vocationalTrainingImages);
    })();
  }, []);

  const openImageModal = (images, index) => {
    setCurrentMedia(images);
    setCurrentIndex(index);
    setIsVideo(false);
    setModalOpen(true);
  };

  const openVideoModal = (index) => {
    setCurrentMedia(videoData);
    setCurrentIndex(index);
    setIsVideo(true);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextMedia = () => {
    setCurrentIndex((currentIndex + 1) % currentMedia.length);
  };

  const prevMedia = () => {
    setCurrentIndex((currentIndex + currentMedia.length - 1) % currentMedia.length);
  };

  // Video data
  const videoData = [
    { videoUrl: video1, alt: "Video 1" },
    { videoUrl: video2, alt: "Video 2" },
    { videoUrl: video3, alt: "Video 3" },
    { videoUrl: video4, alt: "Video 4" },
    { videoUrl: video5, alt: "Video 5" },
    { videoUrl: video6, alt: "Video 6" },
    { videoUrl: video7, alt: "Video 7" },
    { videoUrl: video8, alt: "Video 8" },
    { videoUrl: video9, alt: "Video 9" },
    { videoUrl: video10, alt: "Video 10" },
    { videoUrl: video11, alt: "Video 11" },
    { videoUrl: video12, alt: "Video 12" },
    { videoUrl: video13, alt: "Video 13" },
  ];

  return (
    <div>
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Gallery</h2>
          <nav className="breadcrumb">
            <FaHome className="breadcrumb-icon" />
            <Link to="/">Home</Link> &gt;
            <span>Gallery</span>
          </nav>
        </div>
      </section>

      {/* Yoga, Dance, Music, Brain Gym, etc. Section */}
      <section className="gallery-section">
        <h2>Yoga, Dance, Music, Brain Gym</h2>
        <div className="image-grid">
          {yogaImages.length > 0 ? (
            yogaImages.map((image, index) => (
              <div key={index} className="image-card" onClick={() => openImageModal(yogaImages, index)}>
                <img src={image.url} alt={image.alt} />
              </div>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </section>

      {/* Educational and Psychological Assessment Section */}
      <section className="gallery-section">
        <h2>Educational and Psychological Assessment</h2>
        <div className="image-grid">
          {educationalImages.length > 0 ? (
            educationalImages.map((image, index) => (
              <div key={index} className="image-card" onClick={() => openImageModal(educationalImages, index)}>
                <img src={image.url} alt={image.alt} />
              </div>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </section>

      {/* Early Intervention Section */}
      <section className="gallery-section">
        <h2>Summer Camp</h2>
        <div className="image-grid">
          {summerCampImages.length > 0 ? (
            summerCampImages.map((image, index) => (
              <div key={index} className="image-card" onClick={() => openImageModal(summerCampImages, index)}>
                <img src={image.url} alt={image.alt} />
              </div>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </section>

      {/* Art and Craft Section */}
      <section className="gallery-section">
        <h2>Art and Craft</h2>
        <div className="image-grid">
          {artCraftImages.length > 0 ? (
            artCraftImages.map((image, index) => (
              <div key={index} className="image-card" onClick={() => openImageModal(artCraftImages, index)}>
                <img src={image.url} alt={image.alt} />
              </div>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </section>

      {/* Vocational Training Section */}
      <section className="gallery-section">
        <h2>Vocational Training</h2>
        <div className="image-grid">
          {vocationalTrainingImages.length > 0 ? (
            vocationalTrainingImages.map((image, index) => (
              <div key={index} className="image-card" onClick={() => openImageModal(vocationalTrainingImages, index)}>
                <img src={image.url} alt={image.alt} />
              </div>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="gallery-section">
        <h2>Our Activities Video</h2>
        <div className="image-grid">
          {videoData.map((video, index) => (
            <div key={index} className="image-card" onClick={() => openVideoModal(index)}>
              <video src={video.videoUrl} alt={video.alt} width="100%" muted />
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Images and Videos */}
      {modalOpen && (
        <div className="gallery-modal-backdrop">
          <div className="gallery-modal-content">
            <button onClick={closeModal} className="gallery-modal-close-btn">✖</button>
            <button onClick={prevMedia} className="gallery-modal-nav-btn prevbtn">〈</button>
            {isVideo ? (
              <video src={currentMedia[currentIndex].videoUrl} controls autoPlay className="gallery-modal-image" />
            ) : (
              <img src={currentMedia[currentIndex].url} alt={currentMedia[currentIndex].alt} className="gallery-modal-image" />
            )}
            <button onClick={nextMedia} className="gallery-modal-nav-btn nextbtn">〉</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
