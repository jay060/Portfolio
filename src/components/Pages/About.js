import React from 'react';
import Allan from '../images/code-img.jpg';

function About() {
  return (
    <div>
      <div className="aboutmeintro">A short introduction about me</div>
      <div className="About">
        <div className="abouttext">
          <div className="headtext">
            I'm Jathen,<div>
              </div>A Memphis, Tennessee-based software developer
          </div>
          <div className="details">
             I'm passionate about programming and technology in general, and I've worked hard to stay current with new technologies and skills.
          </div>
          <div className="more">
          I design and develop beautiful and exceptional applications for the web, mobile, and computers. I aspire to work on applications that will be used by billions of people and to have an impact on the world through my work.
          </div>
        </div>
        <div className="imageme">
          <img src={Allan} alt="Allan" height="300" />
        </div>
      </div>
    </div>
  );
}

export default About;
