import React from 'react';
import './Portfolio.scss';

const projects = [
  // Add your projects here
  {
    title: 'Project 1',
    image: 'https://via.placeholder.com/300',
    deployedUrl: 'https://example.com/project1',
    repoUrl: 'https://github.com/username/project1',
  },
  // ...
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
            Deployed Application
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
