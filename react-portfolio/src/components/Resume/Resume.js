import React from 'react';
import './Resume.scss';

const Resume = () => {
  return (
    <section className="resume">
      <a href="/resume.pdf" download>
        Download Resume
      </a>
      <h2>Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Git</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>Python</li>
        <li>Django</li>
        <li>Webpack</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
};

export default Resume;
