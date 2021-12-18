import React from 'react';
import { useNav } from '../customHooks/useNav';

const Contact = () => {
  const contactRef = useNav('Contact');

  return (
    <div class="component" ref={contactRef} id="contactContainer">
      <div className="container">
        <div class="row">
          <div class="col">
            <img
              src="https://dummyimage.com/800x500/d1cdd1/5e5c5e&text=Contact%20Us"
              alt="FPO-img"
              width="100%"
            />
          </div>
          <div class="col">
            <h3>Contact Section</h3>
            <p>This is the Contact section</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
