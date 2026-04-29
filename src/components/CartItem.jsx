import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // ✅ Total cart amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">

      {/* ✅ NAVBAR */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <Link to="/">Home</Link> |{" "}
          <Link to="/plants">Plants</Link> |{" "}
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <h2 className="cart-title">Shopping Cart</h2>

      {/* ✅ CART ITEMS */}
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">

          <img
            src={item.img}
            alt={item.name}
            className="cart-item-image"
          />

          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>

          {/* ✅ QUANTITY CONTROLS */}
          <div className="cart-item-controls">
            <button
              className="decrease-btn"
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, amount: -1 }))
              }
            >
              -
            </button>

            <span className="quantity">{item.quantity}</span>

            <button
              className="increase-btn"
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, amount: 1 }))
              }
            >
              +
            </button>
          </div>

          {/* ✅ DELETE BUTTON */}
          <button
            className="delete-btn"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      {/* ✅ TOTAL AMOUNT */}
      <h3 className="cart-total">Total Amount: ${totalAmount}</h3>

      {/* ✅ ACTION BUTTONS */}
      <div className="cart-actions">
        <button
          className="checkout-btn"
          onClick={() => alert("Coming Soon")}
        >
          Checkout
        </button>

        <Link to="/plants">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>

    </div>
  );
}

export default CartItem;
