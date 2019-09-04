/* eslint-disable */
// jshint ignore: start
import React from 'react'
import { Link } from 'gatsby'
import BurgerButton from './burger'
import Contact from './contact'
import Copyright from './copyright';

class Sidebar extends React.Component {
  // rewrite with hooks
  state = { showMenu: true }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    const { posts, menuLinks, contact } = this.props

    return (
      <div id="sidebar" className={this.state.showMenu ? '' : 'inactive'}>
        <div className="inner">
          <nav id="menu">
            <header className="major">
              <h2>Menu</h2>
            </header>
            <ul className="links">
              {menuLinks.map(link => (
                <li key={link.name} className="nav-home active">
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <section>
            <header className="major">
              <h2>Recent Posts</h2>
            </header>
            <div className="mini-posts">
              {posts.map((post, i) => (
                <article key={i}>
                  <h3>
                    <a href={post.node.fields.slug}>
                      {post.node.frontmatter.title}
                    </a>
                  </h3>
                  <p>{post.node.excerpt}</p>
                </article>
              ))}
            </div>
          </section>
          <Contact contact={contact} />
          <Copyright />
        </div>
        <div className="burger-container toggle" onClick={this.toggleMenu}>
          <BurgerButton />
        </div>
      </div>
    )
  }
}

export default Sidebar
