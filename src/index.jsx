// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

const Home = () => {
   const isMobile = window.innerWidth < 768; // Example breakpoint for mobile layout
     return (
   <div>
         {isMobile ? (
     <div>
       <p class="mobilelargeheading readabilityTop"><b>Welcome to Food for Everyone!</b><br/></p>
      <p class="readabilityMid"><p id="homepagetext1mobile">Food is something that is necessary to survive. Unfortunately there are poor places in the world where people go to bed hungry every night. Food for Everyone has a solution! See our <a href="/about">Mission Statement!</a> To see what our goals are.<br/><br/>Watch the video below for a brief technical overview on how we plan to reach these goals. </p></p>
     <p class="readabilityBottom">
     <p id="homepagevideo">
      <video id="homepagevideoembed" width="320" height="240" controls>
        <source src="foodforeveryone.mp4" type="video/mp4" />
      </video>
     </p>
       <p></p>
       <p class="centered-text"><iframe src="https://hungermap.wfp.org/" height="480px" width="100%" title="Iframe Example"></iframe></p>
     </p>
     </div>
         ) : (
     <div>
       <p class="largeheading readabilityTop"><b>Welcome to Food for Everyone!</b><br/></p>
      <p class="readabilityMid"><p id="homepagetext1">Food is something that is necessary to survive. Unfortunately there are poor places in the world where people go to bed hungry every night. Food for Everyone has a solution! See our <a href="/about">Mission Statement!</a> To see what our goals are.<br/><br/>Watch the video below for a brief technical overview on how we plan to reach these goals. </p></p>
     <p class="readabilityBottom">
     <p id="homepagevideo">
      <video id="homepagevideoembed" width="320" height="240" controls>
        <source src="foodforeveryone.mp4" type="video/mp4" />
      </video>
     </p>
       <p class="centered-text"><iframe src="https://hungermap.wfp.org/" height="480px" width="640px" title="Iframe Example"></iframe></p>
     </p>
       
       
     </div>
         )}
   </div>
     );
   }











  


const Blog = () => (
  <div> 
    <p class="readabilityTop largeheading"><b>Blog</b></p>
    <p class="readabilityMid">Post by Maxwell Gomberg<br/>11/23/2023<br/>We have recently launched a collaboration with USPS, and DHL enabling us to distribute food globally, particularly targeting regions where access to affordable food is a challenge and where hunger is prevalent. Our delivered food is designed for convenience and durability, ensuring it remains edible during transit. Furthermore, this food is developed to have an extended shelf life of up to five years, ensuring it remains safe and nutritious for a significant period.<br/><br/></p>
    <p class="readabilityMid">Post by Maxwell Gomberg<br/>11/23/2023<br/>We operate a fleet of 100 drones capable of reaching remote locations to deliver food to individuals facing food insecurity who lack mail services.<br/><img src="drone.png" alt="Drone"></img></p>

  
    

     <p class="readabilityMid">In an unprecedented collaboration, we have joined forces with the United Nations in a groundbreaking initiative aimed at saving 3 million lives. Our ambitious plan leverages the logistical prowess of DHL and USPS, alongside cutting-edge drone technology, to deliver essential food supplies to some of the world’s most remote areas. This partnership represents a significant milestone in humanitarian efforts, blending traditional delivery methods with innovative technology to overcome the challenges of distance, terrain, and accessibility. By doing so, we are not just delivering food; we are delivering hope to millions who are in dire need of assistance. This initiative goes beyond mere logistics – it's a testament to what can be achieved when global entities come together for a common, noble cause. We also will send a drone with the food if the person is in a remote area with no mail.<br/><br/></p>
    
    <p class="readabilityMid">Post by Pierce Workman<br/>11/1/2023<br/>Thank you to all who have donated so far! We finally have our AI models trained for our drones! We will begin deploying drones to remote countries in January of next year! <br/></p>

    <p class="readabilityBottom"><br/>Post by Pierce Workman<br/>5/1/2023<br/>Thank you to all who donated during the month of April! We have some good news! We raised enough money to start our drone program! In case you haven't heard, the drone program will utilize drones powered by Artificial Intelligence to deliver food to remote areas who may not have access to DHL. With this, we will be once step closer to ending world hunger! We just need a few months to prepare and train the models. We hope to get the program ready sometime next year. Every cent counts! Great job everyone!<br/><p></p></p>

   





    
  </div>
);

const ApplyHere = () => (
  <div>
  <p class="readabilitySingle">Apply Here Text</p>
  </div>
)

const ContactUs = () => {
  
  const isMobile = window.innerWidth < 768;
  console.log(isMobile);

    return (
  <div>
        {isMobile ? (
    <div>
     <p class="readabilityTop largeheading"><b>Meet the team!</b></p>
      <p class="readabilityMid">
        <p class="centered-text">Please email us buyer@techblognow.com if you have any problems</p>

        <p class="centered-text">Maxwell Gomberg<br/><img src="/gambler.png" alt="Maxwell's Profile Picture" height="200px"/></p>
        <p class="centered-text">Co-Founder, AI Trainer, and Developer I am the owner of 50 websites, including techblognow.com, maxwell.page, oldenglishsheepdog.org, nyc.ventures, https://newyearsballdrop.com and many more. You can contact him at maxwellgomberg06@techblognow.com</p>
        <p class="centered-text">Pierce Workman<br/>
        <img src="/trans-makaira.png" alt="Pierce's Profile Picture" height="200px"/><p class="centered-text">Pierce is the co-founder, Developer, Blog Maintainer, and CSS Stylist for Food for Everyone. You can contact them at pierce.workman360@gmail.com</p></p></p>
      
     

      <p class="readabilityBottom"></p>


    </div>
        ) : (
    <div>
     <p class="readabilityTop largeheading"><b>Meet the team!</b></p>
      <p class="readabilityMid">
      <table class="contactTable">
        <p>Please email us buyer@techblognow.com if you have any problems</p>
        <tr>
        <td>Maxwell Gomberg<br/><img src="/gambler.png" alt="Maxwell's Profile Picture" height="200px"/></td>
          <td width="400px">Co-Founder, AI Trainer, and Developer I am the owner of 50 websites, including techblognow.com, maxwell.page, oldenglishsheepdog.org, nyc.ventures, https://newyearsballdrop.com and many more. You can contact him at maxwellgomberg06@techblognow.com</td>
        </tr>
        <tr>
        <td>Pierce Workman<br/><img src="/trans-makaira.png" alt="Pierce's Profile Picture" height="200px"/></td>
          <td>Pierce is the co-founder, Developer, Blog Maintainer, and CSS Stylist for Food for Everyone. You can contact them at pierce.workman360@gmail.com</td>
        </tr>
      </table>
      </p>
      <p class="readabilityBottom"></p>


    </div>
        )}
  </div>
    );
}

  
  ;

const AboutUs = () => {
  const isMobile = window.innerWidth < 768; // Example breakpoint for mobile layout
     return (
   <div>
         {isMobile ? (
     <div>
     <p class="mobilelargeheading readabilityTop"><b>Our Mission Statement</b><br/></p>
       <p class="readabilityBottom">
       We are a nonprofit organization committed to the belief that no one should suffer from starvation or die due to lack of food. To address this issue, we have formed a partnership with USPS and DHL to distribute food with a long shelf life, as well as water, to individuals facing hunger in third-world countries and to those in the USA who are food insecure. Our services are completely free of charge, and our operations are entirely funded through donations. 
       Additionally, we offer a drone delivery option exclusively for individuals living in remote areas where standard delivery services like DHL or USPS are not available. </p>
     </div> 
         ) : (
     <div>
     <p class="largeheading readabilityTop"><b>Our Mission Statement</b><br/></p>
       <p class="readabilityBottom">
       We are a nonprofit organization committed to the belief that no one should suffer from starvation or die due to lack of food. To address this issue, we have formed a partnership with USPS and DHL to distribute food with a long shelf life, as well as water, to individuals facing hunger in third-world countries and to those in the USA who are food insecure. Our services are completely free of charge, and our operations are entirely funded through donations. 
       Additionally, we offer a drone delivery option exclusively for individuals living in remote areas where standard delivery services like DHL or USPS are not available. </p>
     </div> 
         )}
   </div>
     );
  
  
  
   
}

const Donations = () => (
  <div>
    <img src="/src/qrcode.png" alt="QR Code" height="100px"/>
    <p class="readabilityTop">
      We invite you to support our mission to continue providing free food to those in need in third-world countries and to the food-insecure population in the USA. Please consider scanning this QR code to make a donation. Every contribution, no matter the size, makes a difference. Legal disclaimer: Please note, this page is a simulated project and part of a portfolio piece. The represented company is fictitious. Do not make any donations through this site.
    </p>
    <p class="readabilityBottom">
      <form class="forminput">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <br/><p>$ <input type="number" placeholder="Amount in USD"></input></p>

       
        <input type="email" placeholder="Your Email"></input>
        <br/><br/>
        <input type="text" placeholder="Mailing Address"></input>
        <br/>
        <p><input type="text" placeholder="Credit Card Number"></input> WARNING: DO NOT SUBMIT ANY SENSITIVE INFORMATION THROUGH THIS SITE!</p>




      </form>
      <a href="done.html" class="submit-button">Submit</a>
<br/><p></p>
    </p>
    
  </div>
);

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><a href="/" class="leftedge">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/Donations">Donations</a></li>
         <li><a href="/Blog" class="rightedge">Blog</a></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Donations" element={<Donations />} />
    </Routes>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
