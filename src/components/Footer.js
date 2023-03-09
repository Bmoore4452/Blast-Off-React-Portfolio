import React from 'react';

export default function Footer({ setPage }) {
  return (
    <footer className="py-3 my-4">
      {/* <a className="logo" href="https://github.com/Bmoore4452">
        <img src={github} alt="" />
      </a>
      <ul>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul> */}
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a
            href="#about"
            className="nav-link px-2 text-muted"
            onClick={() => setPage('about')}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            className="nav-link px-2 text-muted"
            onClick={() => setPage('portfolio')}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            className="nav-link px-2 text-muted"
            onClick={() => setPage('contact')}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            className="nav-link px-2 text-muted"
            onClick={() => setPage('resume')}
          >
            Resumè
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/Bmoore4452"
            className="nav-link px-2 text-muted"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}
