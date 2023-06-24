import React, { useState, useEffect } from "react";
import redme from '../../data/README.md';
import 'bootstrap/dist/css/bootstrap.css';


import './index.css'



const About = () => {
  const [mark, setMark] = useState("");
  console.log(mark)
  useEffect(() => {
    fetch(redme)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMark(text);
      });

  }, []);

  return (
    <div class="about-container">
      <div class="card-body">
        <div className="top-content text-center">
          <h1 className="About-text">About</h1>
          <p className="about-description">
            This is a ReactJS project of a simple book cart application using react router,
            context api, react hooks, bootstrap, and localStorage.
          </p>
        </div>
      </div>
      <div className="card-footer1">
        <hr className="mt-5"/>
        <h5 className="display-5 text-center footer-text">
          A React Project By &copy;{" "}
          <a
            href="https://github.com/srinivas329"
            rel="noopener noreferrer"
            target="_blank"
          >
            github/srinivas329
          </a>
        </h5>
      </div>
    </div>
  );
};

export default About;