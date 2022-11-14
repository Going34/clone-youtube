import './styles.css';
import React from 'react';
import NavBar from './page/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SinglePage from './component/SinglePage';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/singlepage/:bb" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
