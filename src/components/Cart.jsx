function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={`${item.id}-${index}`} data-testid="cart-item">
              {item.name} is in your cart.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;