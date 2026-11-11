import image1 from '../assets/Images/hero.png';
import "./Hero.css";
function Hero() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${image1})` }}>
          {/* Hero Content */}
          <div className="hero-content">
            <h2 className="hero-subname">Delicious Cafe</h2>
            <h1 className="hero-name">Sweet Treats, Perfect Eats</h1>
            <button className="hero-btn">Shop Now</button>
          </div>
        </section>
    );
}

export default Hero;
