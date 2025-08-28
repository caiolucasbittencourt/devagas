import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Header />
      <Hero showModal={() => setModalVisible(true)} />
      <Footer />
      <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
};

export default App;