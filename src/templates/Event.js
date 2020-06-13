import React, { Component } from "react"
import PropTypes from "prop-types"

class Event extends Component {
  render() {
    const { title, time, photo, body } = this.props.data.contentfulEvent
    return (
      <div>
        <h1>{title}</h1>
        <h2>{time}</h2>
        <img height="250px" src={photo.file.url}></img>
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
      </div>
    )
  }
}

Event.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Event

export const pageQuery = graphql`
  query eventQuery($slug: String!) {
    contentfulEvent(slug: { eq: $slug }) {
      title
      slug
      time
      body {
        childMarkdownRemark {
          html
        }
      }
      photo {
        file {
          url
        }
      }
    }
  }
`
