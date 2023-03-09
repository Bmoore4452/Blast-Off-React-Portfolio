import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
export default function Main({ page }) {
  function display() {
    if (page === 'about') {
      return <About />;
    } else if (page === 'portfolio') {
      return <Portfolio />;
    } else if (page === 'contact') {
      return <Contact />;
    } else {
      return <Resume />;
    }
  }
  return <main className="body container-fluid">{display()}</main>;
}
