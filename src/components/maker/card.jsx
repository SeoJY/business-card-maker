import React, { memo } from 'react';

const DEFAULT_IMAGE = 'images/default_logo.png';

const Card = memo(({ card }) => {
  const {name, company, title, email, message, theme, fileURL} = card;
  const imgURL = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`card ${getStyles(theme)}`}>
      <div className="card-thumb">
        <img src={imgURL} alt="" />
      </div>
      <div className="card-info">
        <ul>
          {name && <li className="name"><strong className="blind">Name</strong>{name}</li>}
          {company && <li><strong className="blind">Company</strong>{company}</li>}
          {title && <li><strong className="blind">Title</strong>{title}</li>}
          {email && <li><strong className="blind">Email</strong>{email}</li>}
          {message && <li className="message"><strong className="blind">Message</strong><q>{message}</q></li>}
        </ul>
      </div>
    </li>
  );
});

function getStyles(theme) {
  switch(theme) {
    case 'Dark':
      return 'theme-dark';
    case 'Light':
      return 'theme-light';
    case 'Jordi':
      return 'theme-jordi';
    default:
      return 'theme-light';
  }
}

export default Card;