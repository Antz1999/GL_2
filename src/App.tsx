import React from 'react';
import { MainLayout } from './components/Layout/MainLayout';
import { useNavigation } from './hooks/useNavigation';
import { HomeHero } from './components/Home/HomeHero';
import { RadioPlayer } from './components/Radio/RadioPlayer';
import { AboutSection } from './components/About/AboutSection';
import { ContactSection } from './components/Contact/ContactSection';

function App() {
  const { currentPage } = useNavigation();

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeHero />;
      case 'radio':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-extralight tracking-wider text-gray-300/80 mb-6">Radio Show</h2>
            <RadioPlayer />
          </div>
        );
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-800 to-gray-600">
      <div className="absolute inset-0 flex items-center justify-center animate-float">
        <img
          src="https://i.ibb.co/Gtj2T8j/GL-transparent.png"
          alt="Floating Logo"
          className="w-96 h-96 object-contain opacity-[0.15] text-gray-400"
        />
      </div>
      <div className="relative z-10">
        <MainLayout>
          {renderContent()}
        </MainLayout>
      </div>
    </div>
  );
}

export default App;