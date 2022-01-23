import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from '../pages/Index.js';
import Login from '../pages/Login.js';
import NotFound from '../pages/NotFound.js';
import Navigation from './Navigation.js';

export default () => {
  return (
    <div className="d-flex flex-column h-100">
      <Router>
        <Navigation />
        <div className="container-fluid h-100">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
