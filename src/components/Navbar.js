export default function Navbar({ setPage }) {
  return (
    <nav class="nav d-flex justify-content-end">
      <h1 className="name">Brian Moore</h1>
      <a class="nav-link" href="#about" onClick={() => setPage('about')}>
        About Me
      </a>
      <a class="nav-link" href="#portfolio" onClick={() => setPage('portfolio')}>
        Portfolio
      </a>
      <a class="nav-link" href="#contact" onClick={() => setPage('contact')}>
        Contact
      </a>
      <a class="nav-link" href="#resume" onClick={() => setPage('resume')}>
        Resumè
      </a>
    </nav>
  );
}
