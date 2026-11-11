import "./MyOrders.css";
const MyOrders = () => {
  return (
   <div className="my-orders">
  <h2>My Orders</h2>

  <div className="orders-table-container">
    <table className="orders-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Order ID</th>
          <th>Created</th>
          <th>Shipping Address</th>
          <th>Items</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {orders.length > 0 ? (
          orders.map((order) => (
            <tr key={order._id}>
              <td>
                <img
                  src={order.orderItems[0].image}
                  alt="product"
                  className="order-image"
                />
              </td>

              <td className="order-id">
                #{order._id}
              </td>

              <td>
                {new Date(order.createdAt).toLocaleDateString()}
              </td>

              <td>
                {order.shippingAddress
                  ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                  : "N/A"}
              </td>

              <td>{order.orderItems.length}</td>

              <td>${order.totalPrice}</td>

              <td>
                <span
                  className={`status ${
                    order.isPaid
                      ? "status-paid"
                      : "status-pending"
                  }`}
                >
                  {order.isPaid ? "Paid" : "Pending"}
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7} className="no-orders">
              You have no orders
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
  )
}

export default MyOrders
