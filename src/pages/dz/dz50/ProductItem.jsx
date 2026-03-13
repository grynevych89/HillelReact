import { memo } from 'react';

const ProductItem = memo(function ProductItem({ product, isInCart, onToggle }) {
  return (
    <div className={`product-item${isInCart ? ' product-item--in-cart' : ''}`}>
      <div className="product-item__info">
        <span className="product-item__name">{product.name}</span>
        <span className="product-item__category">{product.category}</span>
        <span className="product-item__price">${product.price}</span>
      </div>
      <div className="product-item__actions">
        <button
          className={`product-item__btn${isInCart ? ' product-item__btn--remove' : ''}`}
          onClick={() => onToggle(product.id)}
        >
          {isInCart ? 'Remove' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
});

export default ProductItem;
