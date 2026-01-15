function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <button 
        onClick={() => addToCart(product)}
        className="add-to-cart-btn"
        data-testid={`product-${product.id}`}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;