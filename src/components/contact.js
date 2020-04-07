import React from 'react';
import './contact.scss';

const Contact = ({ data }) => (
  <section className="contact">
    <h2 className="contact__title">Contact</h2>
    <ul className="contact__list">
      {data.map(({ key, val, url }) => (
        <li className="contact__list-item">
          <div className="contact__key">{key}</div>
          <div className="contact__val">
            <a href={url}>{val}</a>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Contact;
