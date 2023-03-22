export default function Navbar({ setPage }) {
  return (
    <nav class="nav d-flex justify-content-end mainNav ">
      <h1 className="name" href="#about" onClick={() => setPage('about')}>
        Brian Moore
      </h1>
      <div className="links">
        <a class="nav-link" href="#about" onClick={() => setPage('about')}>
          About Me
        </a>
        <a
          class="nav-link"
          href="#portfolio"
          onClick={() => setPage('portfolio')}
        >
          Portfolio
        </a>
        <a class="nav-link" href="#contact" onClick={() => setPage('contact')}>
          Contact
        </a>
        <a class="nav-link" href="#resume" onClick={() => setPage('resume')}>
          Resumè
        </a>
      </div>
    </nav>
  );
}
