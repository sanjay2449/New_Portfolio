import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
// import ResumeSection from './sections/ResumeSection';
import LottieLoader from "./components/LottieLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <LottieLoader />
      ) : (
        <div>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <CertificatesSection />
          {/* <ResumeSection/> */}
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;