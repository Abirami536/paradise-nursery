
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeltern,
  updateQuantity
} from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const changeQuantity = (item, quantity) => {
    if (quantity < 1) {
      dispatch(removeltern(item.id));
    } else {
      dispatch(updateQuantity({
        id: item.id,
        quantity
      }));
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Continue shopping!</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>
                  Item Total: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() =>
                    changeQuantity(item, item.quantity - 1)
                  }
                >
                  -
                </button>

                <span> {item.quantity} </span>

                <button
                  onClick={() =>
                    changeQuantity(item, item.quantity + 1)
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch(removeltern(item.id))
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <h2>Total Items: {totalItems}</h2>
          <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
        </>
      )}

      <button
        onClick={() => {
          window.location.href = '#plants';
        }}
      >
        Continue Shopping
      </button>

      <button
        onClick={() => alert('Checkout Coming Soon!')}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
