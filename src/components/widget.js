import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Widget = ({ post }) => (
  <article id="banner">
    <div className="content">
      <header>
        <h1>
          <Link to={post.node.fields.slug}>
            {get(post.node, 'frontmatter.title') || post.node.fields.slug}
          </Link>
        </h1>
      </header>
      <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
      <ul className="actions">
        <li>
          <Link to={post.node.fields.slug} className="button big">
            Learn More
          </Link>
        </li>
      </ul>
    </div>
    {post.node.frontmatter.featuredImage.childImageSharp.fluid && (
      <Link to={post.node.fields.slug} className="image object">
        <Img
          fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}
          imgStyle={{
            transition: 'transform 0.2s ease,-webkit-transform 0.2s ease',
          }}
        />
      </Link>
    )}
  </article>
)

export default Widget
