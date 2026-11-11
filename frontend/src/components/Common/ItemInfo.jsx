
const ItemInfo = ({ item, onClose }) => {
  return (
    <div className="item-info-overlay">
      <div className="item-info">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <image src={item.image} alt={item.name} className="item-info-image" />
        <h3 className="item-info-name">{item.name}</h3>
        <p className="item-info-description">{item.descriptionription}</p>
        <p className="item-info-price">${item.price.toFixed(2)}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemInfo;
