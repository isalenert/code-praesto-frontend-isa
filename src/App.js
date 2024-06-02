import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import RegisterPage from './pages/RegisterPage';
import EventsPage from './pages/EventsPage';
import Login from './components/layout/Login';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
