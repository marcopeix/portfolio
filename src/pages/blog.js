import React from "react";
import Link from "gatsby-link";

import "../css/blog.css";

import logo from "../images/logo.jpg";
import github from "../images/github.jpg";
import linkedin from "../images/linkedin.jpg";
import medium from "../images/medium.jpg";

if (typeof window !== 'undefined'){
  require('smooth-scroll')('a[href*="#"]');
}

export default ({ data }) => {
  return (
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
          <a data-scroll href="/#contact" className="navlink">Contact</a>
        </div>
      </div>

      <div className="all-posts">
        {data.allMarkdownRemark.edges.map(({ node }) =>
          <div className="blog-post-link" key={node.id}>
            <Link
              to={node.fields.slug}
              className="link-content"
            >
              <h3>{node.frontmatter.title}</h3>
              <p className="date">- {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        )}
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
            <img src={linkedin}></img>
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
          <a data-scroll href="/#contact" className="navlink">Contact</a>
        </div>
      </footer>

    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
