import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const Footer=()=> {
  return (
    <div className='footer-container'>
     <h2>Contact Us</h2>
            <h4>Our Office Address:-
            Near Rawaldas True Mart,Phoolbagh Square,Gwalior-474002 (M.P.)</h4>
            <h5> +91-751-4013418</h5>
            <h5>+91-9617425253</h5>
            <h5>+91-9098277222</h5>
        
      
      </div>
  );
};

export default Footer;