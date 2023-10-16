import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EnterGradePage from './pages/EnterGradePage';
import ViewGradesPage from './pages/ViewGradesPage';
import AboutPage from './pages/AboutPage';
import './css/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<EnterGradePage />} />
          <Route path="/viewgrades" element={<ViewGradesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
