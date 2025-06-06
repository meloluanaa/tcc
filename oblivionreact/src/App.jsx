import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Pages/LoginForm';
import RegisterPage from './Components/Pages/RegisterPage';
import Site from "c:/Users/desou/OneDrive/Documentos/oblivionreact/src/Components/MaIn/Site";
import '/src/Components/Main/retaguarda.module.css';
import '/src/Components/Main/Modal.module.css';
import '/src/Components/Pages/login.module.css';

import logo from './Components/Main/pngiconenovo.png';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/site" element={<Site />} />
      </Routes>
    </Router>
  );
}

export default App;