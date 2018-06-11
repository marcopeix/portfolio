import React from "react";
import Link from "gatsby-link";

import "../css/index.css";

import logo from "../images/logo.jpg";
import github from "../images/github.jpg";
import linkedin from "../images/linkedin.jpg";
import medium from "../images/medium.jpg";
import showroom from "../images/showroom.jpg";
import laboratory from "../images/laboratory.jpg";

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
        <a data-scroll href="#contact" className="lastnavlink">Contact</a>
      </div>
    </div>

    <div className="hero">
      <div className="hero-content">
        <h1>Creative</h1>
        <h1>Data Scientist</h1>
        <h1>Software Engineer</h1>
        <a data-scroll href="#about" className="button">Learn more</a>
      </div>
    </div>

    <div id="about" className="about">
      <h1>I code. I create. I learn.</h1>
      <p>My coding journey started in web development. I quickly moved on to learn full-stack development before diving into data science. An engineer at heart, I tinker with design to bring my projects to a higher level.</p>
      <a data-scroll href="#showroom" className="button">See what I can do</a>
    </div>

    <div id="showroom" className="showroom">
      <img src={showroom}></img>
      <div className="text">
        <h1>Showroom</h1>
        <p>Explore my collection of web projects.</p>
        <Link to="/showroom" className="visit">Visit the showroom</Link>
      </div>
    </div>

    <div className="laboratory">
      <div className="text">
        <h1>Laboratory</h1>
        <p>Find more about my data science and AI projects.</p>
        <Link to="/laboratory" className="visit">Visit the laboratory</Link>
      </div>
      <img src={laboratory}></img>
    </div>

    <div id="contact" className="contact">
      <h1>Let's work together</h1>
      <div className="form">
        <form>
          <label for="name">Name</label>
          <input type="text" id="name" name="name"></input>
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email"></input>
          <label for="message">Message</label>
          <textarea id="message" name="message"></textarea>
          <button className="button">Send</button>
        </form>
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
