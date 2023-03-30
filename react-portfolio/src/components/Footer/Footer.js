import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/username/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://stackoverflow.com/users/your_user_id" target="_blank" rel="noopener noreferrer">
        <FaStackOverflow />
      </a>
    </footer>
  );
};

export default Footer;
