import React from "react";
import Skeleton from '../components/Skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
            <p><a href="tel:3868824486">(386) 882-4486</a></p>
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
            <a href="\">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="\">
            <FontAwesomeIcon icon={faCoffee} />
            </a>
            <a href="\">
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
            </a>
            <a href="\">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
