import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Event = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
      <img height="150px" src={node.photo.file.url}></img>
      <div>{node.time}</div>
      <div>{node.body.childMarkdownRemark.excerpt}</div>
    </li>
  )
}
const IndexPage = ({ data }) => (
  <ul>
    {data.allContentfulEvent.edges.map(edge => (
      <Event node={edge.node} />
    ))}
  </ul>
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
