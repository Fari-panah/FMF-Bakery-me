/*import "./PromoSection.css"; // ✅ Import CSS


const PromoSection = () => {
  return (
    <div className="promo-section">
      <div className="promo-content">
        <h2>20% Off Your First Order</h2>
        <p>Enjoy the warmth of freshly baked goods!
            Get 20% off your first order and experience the taste
             of handcrafted delights made with love and the finest
             ingredients. Don’t miss out—treat yourself today!</p>
        <button className="promo-btn">Learn More</button>
      </div>
    </div>
  );
};

export default PromoSection;*/

/*import React, { useState } from "react";
import "./PromoSection.css"; // ✅ Import CSS

const slides = [
  {
    title: "20% Off Your First Order",
    description:
      "Enjoy the warmth of freshly baked goods! Get 20% off your first order and experience the taste of handcrafted delights made with love and the finest ingredients. Don’t miss out—treat yourself today!",
  },
  {
    title: "Buy 1 Get 1 Free",
    description:
      "For a limited time, buy any bread and get another one absolutely free! Don't miss this delicious offer. Valid until the end of the month!",
  },
  {
    title: "Free Shipping on Orders Over €50",
    description:
      "Get free shipping on all orders over €50. Order your favorite baked goods now and enjoy doorstep delivery!",
  },
];

const PromoSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="promo-section">
      <div className="promo-content">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
        <button className="promo-btn">Learn More</button>
      </div>
      <div className="promo-buttons">
        <button className="prev-btn" onClick={prevSlide}>← Previous</button>
        <button className="next-btn" onClick={nextSlide}>Next →</button>
      </div>
    </div>
  );
};

export default PromoSection;
*/

import React, { useState } from "react";
import "./PromoSection.css"; // ✅ Import CSS

const slides = [
  {
    title: "20% Off Your First Order",
    description:
      "Enjoy the warmth of freshly baked goods! Get 20% off your first order and experience handcrafted delights.",
  },
  {
    title: "Buy 1 Get 1 Free",
    description:
      "For a limited time, buy any bread and get another one absolutely free! Don't miss this delicious offer.",
  },
  {
    title: "Free Shipping on Orders Over €50",
    description:
      "Get free shipping on all orders over €50. Order your favorite baked goods now and enjoy doorstep delivery!",
  },
  {
    title: "About Us",
    description:
      "At TestBakery, we are passionate about crafting the finest baked goods. Every product is made with love and the best ingredients to ensure top quality for our customers.",
  },
];

const PromoSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="promo-section">
      <div className="promo-content">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>

      <div className="promo-buttons">
        <button className="prev-btn" onClick={prevSlide} disabled={currentSlide === 0}>
           Previous
        </button>
        <button className="next-btn" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PromoSection;

