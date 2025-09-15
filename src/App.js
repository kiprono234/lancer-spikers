import React from 'react';
import './App.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ReadMoreSection from './components/ReadMoreSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ReadMoreSection />
      <Footer />
      {/* Other page content will go here */}
    </div>
  );
}

export default App;