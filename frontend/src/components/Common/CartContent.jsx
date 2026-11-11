import menuItems from "../../menuItems"
import "./Cart.css";
const CartContent = () => {
  return (
    <div>
        {menuItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        
          {menuItems.map((item) => (
            <div key={item.id} className="cart-item">
             
              <image
                src={item.image}
                alt={item.name || "Unnamed Product"}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name || "Unnamed Product"}</h3> 

                <div className="quantity-controls">
                  <button className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >-</button>
                 
                  <span className="quantity-number">{item.quantity}</span>

                  <button className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >+</button>
                </div>

                <button className="remove-button" onClick={() => removeFromCart(item.id)}>🗑️</button>
                 <p className="cart-item-price">
                € {item.price ? (item.price * item.quantity).toFixed(2) : "0.00"}
              </p>
            </div>
          ))}
              </div>
      
    </div>
  )
}

export default CartContent
