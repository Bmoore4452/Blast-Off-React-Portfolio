import homefit from '../assets/images/homefit.png';
import codeQuiz from '../assets/images/codequiz.png';
import pokedex from '../assets/images/pokedex.png';
import weather from '../assets/images/weather.png';
import fullplate from '../assets/images/fullplate.png';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-head">Portfolio</h1>
      <div className="portfolio-cards">
        <a
          className="card portfolio-card"
          href="https://secure-dawn-49208.herokuapp.com/"
        >
          <img src={fullplate} alt="Full Plate" />
        </a>
        <a
          className="card portfolio-card"
          href="https://homefitwellness.herokuapp.com/"
        >
          <img src={homefit} alt="Homefit Wellness" />
        </a>
      </div>
      <div className="portfolio-cards2">
        <a
          className="card portfolio-card"
          href="https://stamperm.github.io/velocirapt-vars--pokedex/"
        >
          <img src={pokedex} alt="Pokedex Website" />
        </a>
        <a
          className="card portfolio-card"
          href="https://bmoore4452.github.io/Multi-City-Weather-Dashboard/"
        >
          <img src={weather} alt="Weather App" />
        </a>
      </div>
    </div>
  );
}
