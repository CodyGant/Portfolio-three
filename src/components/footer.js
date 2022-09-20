import React from "react";
import Skeleton from '../components/Skeleton';

import { DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';

function footer() {
  return (
    <div className="footerContainer">
      <footer class="footer-distributed">
      <div className = 'skeletonBox'>
      <p>Goodbye, I hope to hear from you.</p>
        <Skeleton/>
        </div>
      
        <div className="footer-left">
          
          <h3>
            <span></span>
          </h3>
          <p className="footer-links">
            <a href="\">HOME</a>
            <a href="\">RESUME</a>           
            <a href="\">CONTACT</a>
          </p>

          
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Based in Central Florida,</span> USA.
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p><a href="tel:3868824486">(386) 882-4486 </a></p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:codygantol@gmail.com">codygantol@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
          
            
          </p>

          <div className="footer-icons">
            <a  target="_blank" rel="noreferrer" href="https://github.com/CodyGant">
            <DiGithubBadge />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/cody-gant-ba86881aa/">
            <AiFillLinkedin />
            </a>
            <a target="_blank" rel="noreferrer" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://media-exp1.licdn.com/dms/document/C4E2DAQEUZ8vx4aJR2A/profile-treasury-document-pdf-analyzed/0/1647880771269?e=1664409600&v=beta&t=FwgFfhoD7GUZ38AxtzAxhWwxORKTLZNXuT-Z-CNRLkQ">
            <DiGithubBadge />
            </a>
            <a  target="_blank" rel="noreferrer" href="\">
            <DiGithubBadge />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
