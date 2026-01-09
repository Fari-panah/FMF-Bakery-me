import img1 from '../assets/Images/hero.png';
import "./Hero.css";
function Hero() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${img1})` }}>
          {/* Hero Content */}
          <div className="hero-content">
            <h2 className="hero-subtitle">Delicious Cafe</h2>
            <h1 className="hero-title">Sweet Treats, Perfect Eats</h1>
            <button className="hero-btn">Shop Now</button>
          </div>
        </section>
    );
}

export default Hero;
