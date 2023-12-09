// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

const Home = () => (
  <div>
    <p>Hello world</p>
  </div>
);
const ContactUs = () => <div>
  You can reach me at buyer@techblognow.com. Please note that this page is intentionally designed for educational purposes and is not authentic.</div>;
const AboutUs = () => <div>About Us content</div>;
const WhatWeDo = () => <div>What We Do content</div>;

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/what-we-do">What We Do</a></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/what-we-do" element={<WhatWeDo />} />
    </Routes>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
