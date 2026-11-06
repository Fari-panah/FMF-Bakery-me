
const ItemInfo = ({ item, onClose }) => {
  return (
    <div className="item-info-overlay">
      <div className="item-info">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img src={item.image} alt={item.name} className="item-info-img" />
        <h3 className="item-info-title">{item.name}</h3>
        <p className="item-info-desc">{item.description}</p>
        <p className="item-info-price">${item.price.toFixed(2)}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemInfo;
