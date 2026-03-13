import { useState, useMemo, useCallback } from 'react';
import ProductItem from './ProductItem';

const PRODUCTS = [
  { id: 1,  name: 'Wireless Headphones',  category: 'Electronics', price: 89 },
  { id: 2,  name: 'Mechanical Keyboard',  category: 'Electronics', price: 129 },
  { id: 3,  name: 'USB-C Hub',            category: 'Electronics', price: 45 },
  { id: 4,  name: 'HDMI Cable',           category: 'Electronics', price: 18 },
  { id: 5,  name: 'Running Shoes',        category: 'Sports',      price: 75 },
  { id: 6,  name: 'Yoga Mat',             category: 'Sports',      price: 35 },
  { id: 7,  name: 'Water Bottle',         category: 'Sports',      price: 22 },
  { id: 8,  name: 'React: The Book',      category: 'Books',       price: 48 },
  { id: 9,  name: 'Clean Code',           category: 'Books',       price: 42 },
  { id: 10, name: 'JavaScript Patterns',  category: 'Books',       price: 55 },
];

function MemoDemo() {
  const [filter, setFilter] = useState('');

  const [count, setCount] = useState(0);

  const [cart, setCart] = useState(() => new Set());

  const filteredProducts = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(filter.toLowerCase()) ||
          p.category.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter]
  );

  const cartTotal = useMemo(
    () => PRODUCTS.filter((p) => cart.has(p.id)).reduce((sum, p) => sum + p.price, 0),
    [cart]
  );

  const handleToggle = useCallback((id) => {
    setCart((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  return (
    <div className="dz50">
      <div className="dz50__controls">
        <input
          className="dz50__filter"
          type="text"
          placeholder="Filter by name or category…"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="dz50__counter">
          <span>
            Unrelated counter: <strong>{count}</strong>
          </span>
          <button className="dz50__counter-btn" onClick={() => setCount((c) => c + 1)}>
            +1
          </button>
        </div>
      </div>

      <p className="dz50__info">
        Click <strong>+1</strong> to trigger a parent re-render without changing product data.
        Product rows do not re-render — verify via{' '}
        <strong>React DevTools → Profiler</strong> (
        <code className="inline-code">React.memo</code> +{' '}
        <code className="inline-code">useCallback</code>).
      </p>

      {cart.size > 0 && (
        <div className="dz50__cart-summary">
          Cart: <strong>{cart.size}</strong> item{cart.size !== 1 ? 's' : ''} — Total:{' '}
          <strong>${cartTotal}</strong>{' '}
          <span className="dz50__cart-memo">(total via <code className="inline-code">useMemo</code>)</span>
        </div>
      )}

      <div className="dz50__products">
        {filteredProducts.length === 0 ? (
          <p className="dz50__empty">No products match &ldquo;{filter}&rdquo;</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              isInCart={cart.has(product.id)}
              onToggle={handleToggle}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MemoDemo;
