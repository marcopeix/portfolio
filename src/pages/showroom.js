import React from "react";
import Link from "gatsby-link";

import "../css/showroom.css";

import logo from "../images/logo.jpg";
import github from "../images/github.jpg";
import linkedin from "../images/linkedin.jpg";
import medium from "../images/medium.jpg";
import arrow from "../images/right-arrow.jpg";
import showroom from "../images/showroom.jpg";

if (typeof window !== 'undefined'){
  require('smooth-scroll')('a[href*="#"]');
}

export default () => (
  <div>

    <div className="nav">
      <Link to="/">
        <img src={logo} alt="Marco Peixeiro logo"></img>
      </Link>
      <div className="links">
        <Link
          className="navlink"
        to="/showroom">
          Showroom
        </Link>
        <Link
          className="navlink"
        to="/laboratory">
          Laboratory
        </Link>
        <Link
          className="navlink"
        to="/blog">
          Blog
        </Link>
        <a data-scroll href="/#contact" className="lastnavlink">Contact</a>
      </div>
    </div>

    <div className="hero-show">
      <img src={showroom}></img>
      <div className="text">
        <h1> Welcome to the showroom</h1>
        <p>I see you are curious about my web projects.</p>
        <a href="#project" className="button">Explore</a>
      </div>
    </div>



    <div id="project" className="project">
      <img src="https://i.imgur.com/s3rzO1P.jpg"></img>
      <div className="side-side">
        <img src="https://i.imgur.com/jM8xUhR.jpg"></img>
        <div className="project-text">
          <h1>01</h1>
          <h3>POC POC</h3>
          <p className="desc">POC POC sells urban chicken coops through their custom ecommerce platform. The website also powers a blog and features a bilingual interface.</p>
          <div className="project-link">
            <a target="_blank" href="https://www.poc-poc.com/">Visit project</a>
            <img src={arrow}></img>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div className="icons">
        <a href="https://github.com/marcopeix" target="_blank">
          <img src={github}></img>
        </a>
        <a href="https://medium.com/me/stories/public" target="_blank">
          <img src={medium}></img>
        </a>
        <a href="https://www.linkedin.com/in/marco-peixeiro/" target="_blank">
          <img className="last" src={linkedin}></img>
        </a>
      </div>
      <div className="links">
        <Link
          className="navlink"
        to="/showroom">
          Showroom
        </Link>
        <Link
          className="navlink"
        to="/laboratory">
          Laboratory
        </Link>
        <Link
          className="navlink"
        to="/blog">
          Blog
        </Link>
        <a data-scroll href="#contact" className="lastnavlink">Contact</a>
      </div>
    </footer>

  </div>
);
