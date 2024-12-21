import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ProgramsAndServices from './pages/ProgramAndServices';
import Donation from './pages/Donation';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideButton from './components/SideButton'
import FloatingButtons from './components/FloatingButton';
import ScrollToTop from './components/ScrollTop';
import PageTransition from './components/PageTransition';

// Import your gallery area components
import Area1 from './pages/gallery/RemedialClasses';
import Area2 from './pages/gallery/BehaviourModificationClasses';
import Area3 from './pages/gallery/SpeechAndLanguageTherapy';
import Area5 from './pages/gallery/NIOSClasses';
import Area7 from './pages/gallery/CocurricularActivities';
import Area4 from './pages/gallery/PhysicalTherapy';
import Area8 from './pages/gallery/SoftSkills';
import Area6 from './pages/Gallery/EducationalandPsychologicaltesting';
import GetInvolved from './pages/GetInvolved';

function App() {
  return (
    <Router>
      <PageTransition/>
      <ScrollToTop/>
      <Navbar/>
      <FloatingButtons/>
      <SideButton/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ProgramsAndServices />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/area1" element={<Area1 />} />
        <Route path="/gallery/area2" element={<Area2 />} />
        <Route path="/gallery/area3" element={<Area3 />} />
        <Route path="/gallery/area4" element={<Area4 />} />
        <Route path="/gallery/area5" element={<Area5 />} />
        <Route path="/gallery/area6" element={<Area6 />} />
        <Route path="/gallery/area7" element={<Area7 />} />
        <Route path="/gallery/area8" element={<Area8 />} />
        <Route path="/getinvolved" element={<GetInvolved/>}/>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
