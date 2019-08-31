import React from 'react'

const Contact = ({ contact }) => (
  <section>
    <header className="major">
      <h2>Get in touch</h2>
    </header>
    <p>{contact.info}</p>
    <ul className="contact">
      <li className="fa-mail">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </li>
      <li className="fa-phone">{contact.tel}</li>
      <li className="fa-home">{contact.address}</li>
    </ul>
  </section>
)

export default Contact
