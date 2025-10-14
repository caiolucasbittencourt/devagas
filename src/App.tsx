import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partner from "./pages/Partner";

const App: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero showModal={() => setModalVisible(true)} />
              <Modal
                isVisible={isModalVisible}
                onClose={() => setModalVisible(false)}
              />
            </Layout>
          }
        />
        <Route
          path="/sobre"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contato"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/parceiro"
          element={
            <Layout>
              <Partner />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
