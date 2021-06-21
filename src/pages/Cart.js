import React, { useState, useEffect } from 'react';

const getLocalStorage = () => {
  const item = localStorage.getItem('cart-products');
  return item ? JSON.parse(item) : [];
};

export default function Cart() {
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    setLocalItems(getLocalStorage());
  }, []);
  return (
    <div>
      <div className="cart-container">
        <div className="item">
          {localItems.map((item) => (
            <article key={ item.id }>
              <h3 data-testid="shopping-cart-product-name">{ item.title }</h3>
              <img src={ item.thumbnail } alt={ item.title } />
              <p
                data-testid="shopping-cart-product-quantity"
              >
                {`Quantidade: ${localItems.length}`}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
