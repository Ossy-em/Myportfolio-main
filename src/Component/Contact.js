import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYahoo, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const openExternalLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className='contact-container'>
      <h3>Wanna do coffee and chat?</h3>
      <button className='contact-link' onClick={() => openExternalLink('https://github.com/Ossy-em')}>
        <FontAwesomeIcon icon={faGithub} size='2x'/>
        <span className="button-label"></span>
      </button>

      <button className='contact-link' onClick={() => openExternalLink('https://ossywebdev@gmail.com')}>
        <FontAwesomeIcon icon={faYahoo} size='2x' />
        <span className="button-label"></span>
      </button>

      <button className='contact-link' onClick={() => openExternalLink('https://twitter.com/ossyjs')}>
        <FontAwesomeIcon icon={faTwitter} size="2x"/>
        <span className="button-label"></span>
      </button>
    </div>
  );
};

export default Contact;
