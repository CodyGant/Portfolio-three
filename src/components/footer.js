import React from "react";
import Skeleton from '../components/Skeleton';
function footer() {
  return (
    <div className="footerContainer">
      <footer class="footer-distributed">
      <div className = 'skeletonBox'>
      <p>Goodbye, I hope to hear from you.</p>
        <Skeleton/>
       
        </div>
      
        <div class="footer-left">
          
          <h3>
            <span></span>
          </h3>
          <p class="footer-links">
            <a href="\">HOME</a>
            <a href="\">RESUME</a>           
            <a href="\">CONTACT</a>
          </p>

          
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Based in Central Florida,</span> USA.
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>(386) 882-4486</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">codygantol@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
          
            
          </p>

          <div class="footer-icons">
            <a href="\">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="\">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="\">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="\">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
