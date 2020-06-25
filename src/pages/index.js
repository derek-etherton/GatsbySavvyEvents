import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import About from "../components/About"

import "../css/default.css"
import "../css/layout.css"
import "../css/media-queries.css"
import "../css/magnific-popup.css"

const Event = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
      <img
        class="event-img"
        alt="Event Image"
        height="150px"
        src={node.photo.file.url}
      ></img>
      <div>{node.time}</div>
      <div>{node.body.childMarkdownRemark.excerpt}</div>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <div className="App">
    <Header key="0" />
    <About key="1" />
    <div id="events">
      <ul>
        {data.allContentfulEvent.edges.map(edge => (
          <Event node={edge.node} />
        ))}
      </ul>
    </div>
  </div>
)

export default IndexPage
export const PageQuery = graphql`
  query pageQuery {
    allContentfulEvent(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          time
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          photo {
            file {
              url
            }
          }
        }
      }
    }
  }
`
