import React from "react";

const ItemInfo = ({ item, onClose }) => {
  return (
    <div className="item-info-overlay">
      <div className="item-info">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img src={item.img} alt={item.title} className="item-info-img" />
        <h3 className="item-info-title">{item.title}</h3>
        <p className="item-info-desc">{item.desc}</p>
        <p className="item-info-price">${item.price.toFixed(2)}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemInfo;
