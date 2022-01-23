import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Hexlet Chat
        </Link>
      </div>
    </nav>
  );
}
