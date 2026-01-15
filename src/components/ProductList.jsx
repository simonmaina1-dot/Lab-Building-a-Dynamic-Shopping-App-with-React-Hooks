import ProductCard from './ProductCard';

export const sampleProducts = [
  { id: 1, name: 'Milk', category: 'Dairy' },
  { id: 2, name: 'Eggs', category: 'Dairy' },
  { id: 3, name: 'Bread', category: 'Bakery' },
  { id: 4, name: 'Apple', category: 'Fruits' },
  { id: 5, name: 'Banana', category: 'Fruits' },
  { id: 6, name: 'Chicken', category: 'Meat' },
];

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="products-container">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;