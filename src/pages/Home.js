import React from 'react';
import { useNav } from '../customHooks/useNav';

const Home = () => {
  const homeRef = useNav('Home');

  return (
    <div class="component" ref={homeRef} id="homeContainer">
      <div className="container">
        <div class="row">
          <div class="col">
            <img
              src="https://dummyimage.com/800x500/d1cdd1/5e5c5e&text=Hero%20Billboard"
              alt="FPO-img"
              width="100%"
            />
          </div>
          <div class="col">
            <h3>Hero Section</h3>
            <p>This is the Hero section</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
