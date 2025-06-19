
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AnimatedPageWrapper from './components/utils/AnimatedPageWrapper';

const AppContent: React.FC = () => {
  const location = useLocation(); // Needed for re-rendering AnimatedPageWrapper on route change

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16"> {/* Adjust pt if navbar height changes */}
        <AnimatedPageWrapper key={location.pathname}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatedPageWrapper>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
    