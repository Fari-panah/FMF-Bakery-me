import { useNavigate } from "react-router-dom";
import "./Cart.css";
import CartContent from "./CartContent";


const Cart = (showCart, toggleCart ) => {
    const navigate = useNavigate();
 

  return (
    <div className="cart-container">
     
      <div className="cart-header">
        <h2>🛒 My Cart</h2>
        <button className="close-button" onClick={toggleCart}>x</button>
      </div>
      {/*scrollable contents */}
      <div>
        <CartContent />
      </div>

      

             

          <h3 className="subtotal">
             Sub Total: € {cartItems.length > 0
                ? cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0).toFixed(2)
                : "0.00"}
          </h3>

          <div className="cart-buttons">
            <button className="continue-shopping" onClick={() => {
              console.log("✅ Continue Shopping Clicked! Navigating to Home.");
              setShowCart(false);
              navigate("/");
            }}>
              Continue Shopping
            </button>

            <button className="checkout">Check Out</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;