import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle, social }) => {
  return (
    <header id="header">
      <Link to="/" className="logo">
        <strong>{siteTitle}</strong>
      </Link>
      <ul className="icons">
        {Object.keys(social).map((keyName, i) => (
          <li key={i}>
            <a href={social[keyName]} className={`icon fa-${keyName}`}>
              <span className="label">{keyName}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
