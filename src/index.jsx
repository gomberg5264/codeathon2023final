// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

const Home = () => (
   <div>
      <p class="largeheading readabilityTop"><b>Welcome to Food for Everyone!</b><br/></p>
     <p class="readabilityBottom">Food is something that is necessary to survive. Unfortunately there are poor places in the world where people go to bed hungry every night. Food for Everyone has a solution! See our <a href="/about">Mission Statement!</a></p>
   </div>

);
const Blog = () => (
  <div> 
    <p class="readabilitySingle"> We have recently launched a collaboration with USPS, enabling us to distribute food globally, particularly targeting regions where access to affordable food is a challenge and where hunger is prevalent. Our delivered food is designed for convenience and durability, ensuring it remains edible during transit. Furthermore, this food is developed to have an extended shelf life of up to five years, ensuring it remains safe and nutritious for a significant period.</p>
  </div>
);
const ContactUs = () => <div> 
 <p class="readabilitySingle">You can reach me at buyer@techblognow.com. Please note that this page is intentionally designed for educational purposes and is not authentic.</p></div>;
const AboutUs = () => (
  <div>
  <p class="largeheading readabilityTop"><b>About Us</b><br/></p>
    <p class="readabilityBottom">It's unfortunate that many people </p>
  </div>  
)
const WhatWeDo = () => <div>What We Do content</div>;

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><a href="/" class="leftedge">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/what-we-do">What We Do</a></li>
         <li><a href="/Blog" class="rightedge">Blog</a></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/Blog" element={<Blog />} />
    </Routes>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
