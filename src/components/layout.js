/* eslint-disable */
// jshint ignore: start
import React from 'react'
import Sidebar from './sidebar'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import '../styles/main.scss'

class Template extends React.Component {
  render() {
    const { children, location, data } = this.props;
    const { social, title, menuLinks, contact } = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges.slice(0,3);

    return (
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <Header social={social} siteTitle={title} />
            {children}
          </div>
        </div>
        <Sidebar posts={posts} menuLinks={menuLinks} contact={contact} />
      </div>
    )
  }
}

const Layout = (props) => {
  console.log(props)
  return (
    <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
              facebook
              snapchat
              instagram
              medium
            }
            menuLinks {
              name
              link
            }
            contact {
              info
              email
              tel
              address
            }
          }    
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "DD MMMM, YYYY")
                title
              }
            }
          }
        }
      }
    `}
    render={data => <Template data={data} {...props} />}
  />
  )
}

export default Layout
