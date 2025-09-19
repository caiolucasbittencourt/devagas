import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Modal from './components/Modal';

import About from './pages/About';
import Contact from './pages/Contact';
import Partner from './pages/Partner';

const App: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero showModal={() => setModalVisible(true)} />
            <Footer />
            <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
          </>
        } />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/parceiro" element={<Partner />} />
      </Routes>
    </Router>
  );
};

export default App;