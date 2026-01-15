import { useState } from 'react';
import './App.css';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList, { sampleProducts } from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <h1>My Shopping App</h1>
      
      <div className="filter-section">
        <label htmlFor="category-filter">Filter by Category: </label>
        <select 
          id="category-filter" 
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          data-testid="category-filter"
        >
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Fruits">Fruits</option>
          <option value="Meat">Meat</option>
        </select>
      </div>

      <ProductList 
        products={filteredProducts} 
        addToCart={addToCart} 
      />
      
      <Cart cart={cart} />
    </div>
  );
}

export default App;