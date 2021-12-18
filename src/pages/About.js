import React from 'react';
import { useNav } from '../customHooks/useNav';

const About = () => {
  const aboutRef = useNav('About');

  return (
    <div class="component" ref={aboutRef} id="aboutContainer">
      <div className="container">
        <div class="row align-items-center">
          <div class="col">
            <h3>About Us Section</h3>
            <p>This is the About section</p>
          </div>
          <div class="col">
            <img
              src="https://dummyimage.com/800x500/d1cdd1/5e5c5e&text=About%20Us"
              alt="FPO-img"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
