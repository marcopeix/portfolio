import React from "react";
import Link from "gatsby-link";

import "../css/laboratory.css";

import logo from "../images/logo.jpg";
import github from "../images/github.jpg";
import linkedin from "../images/linkedin.jpg";
import medium from "../images/medium.jpg";
import arrow from "../images/right-arrow.jpg";
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

    <div className="hero-lab">
      <div className="text">
        <h1> Welcome to the laboratory</h1>
        <p>Here is where I show off my nerdy side.</p>
        <a href="#lab-project" className="button">Explore</a>
      </div>
      <img src={laboratory}></img>
    </div>

    <div id="lab-project" className="lab-project">

      <div className="single-project">
        <h3>Credit Modelling</h3>
        <p><strong>Objective:</strong> Create a machine learning model to allow a conservative investor to avoid people that will default on their loans.</p>
        <p><strong>Result:</strong> False positive rate of 9% achieved and a true positive rate of 24%.</p>
        <div className="project-link">
          <a target="_blank" href="https://github.com/marcopeix/credit-modelling-lending-club">Visit project</a>
          <img src={arrow}></img>
        </div>
      </div>

      <div className="single-project">
        <h3>Predicting House Sale Prices in Ames, Iowa</h3>
        <p><strong>Objective:</strong> Use linear regression to predict the sale prices of houses in the city of Ames in Iowa, USA.</p>
        <p><strong>Result:</strong> RMSE of 28931.</p>
        <div className="project-link">
          <a target="_blank" href="https://github.com/marcopeix/house-sale-price-ames-iowa">Visit project</a>
          <img src={arrow}></img>
        </div>
      </div>

      <div className="single-project">
        <h3>Chinook Business Insights</h3>
        <p><strong>Objective:</strong> Answer business questions and make the best decision for future business moves.</p>
        <p><strong>Result:</strong> The rock genre is popular in the USA. Czech Republic, United Kingdom, and India have great growth opportunities. Finally, album purchases account for 20% of total sales, so the offering should remain.</p>
        <div className="project-link">
          <a target="_blank" href="https://github.com/marcopeix/chinook-insights">Visit project</a>
          <img src={arrow}></img>
        </div>
      </div>

      <div className="single-project">
        <h3>Hacker News Pipeline</h3>
        <p><strong>Objective:</strong> Construct a data pipeline to retrieve the 100 most common keywords of the most popular articles on Hacker News.</p>
        <p><strong>Result:</strong> "Google", "Bitcoin", "programming", and "Python" make the headlines of the most popular articles.</p>
        <div className="project-link">
          <a target="_blank" href="https://github.com/marcopeix/hacker-news-pipeline">Visit project</a>
          <img src={arrow}></img>
        </div>
      </div>

      <div className="single-project">
        <h3>Predict Bike Rentals</h3>
        <p><strong>Objective:</strong> Identify the best machine learning model to predict the total number of bike rentals for a given time of the day.</p>
        <p><strong>Result:</strong> A random forest regressor with a minimum of 5 samples at a leaf node is the best model.</p>
        <div className="project-link">
          <a target="_blank" href="https://github.com/marcopeix/predict-bike-rentals">Visit project</a>
          <img src={arrow}></img>
        </div>
      </div>

      <div className="single-project">
        <h3>Fandango Movie Reviews</h3>
        <p><strong>Objective:</strong> Determine if Fandango movie reviews are biased.</p>
        <p><strong>Result:</strong> Fandango is biased. The average rating is 4 out of 5, as opposed to 3 out of 5 from Metacritic.</p>
        <div className="project-link">
          <a target="_blank" href="https://github.com/marcopeix/fandango-movie-reviews-bias">Visit project</a>
          <img src={arrow}></img>
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
