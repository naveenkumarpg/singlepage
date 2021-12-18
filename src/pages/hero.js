import React from 'react';
import { useNav } from '../customHooks/useNav';

const Hero = () => {
  const homeRef = useNav('Home');

  return (
    <div class="small-component" ref={homeRef} id="homeContainer">
      <div className="container">
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
