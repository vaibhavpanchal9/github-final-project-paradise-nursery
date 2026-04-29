import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const data = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 10, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Aloe Vera", price: 8, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 12, img: "https://via.placeholder.com/100" },
    { id: 4, name: "Spider Plant", price: 9, img: "https://via.placeholder.com/100" },
    { id: 5, name: "ZZ Plant", price: 15, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Rubber Plant", price: 14, img: "https://via.placeholder.com/100" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 7, img: "https://via.placeholder.com/100" },
    { id: 8, name: "Tulip", price: 6, img: "https://via.placeholder.com/100" },
    { id: 9, name: "Sunflower", price: 5, img: "https://via.placeholder.com/100" },
    { id: 10, name: "Lavender", price: 11, img: "https://via.placeholder.com/100" },
    { id: 11, name: "Hibiscus", price: 10, img: "https://via.placeholder.com/100" },
    { id: 12, name: "Marigold", price: 4, img: "https://via.placeholder.com/100" }
  ],
  Succulents: [
    { id: 13, name: "Cactus", price: 6, img: "https://via.placeholder.com/100" },
    { id: 14, name: "Echeveria", price: 7, img: "https://via.placeholder.com/100" },
    { id: 15, name: "Jade Plant", price: 9, img: "https://via.placeholder.com/100" },
    { id: 16, name: "Sedum", price: 8, img: "https://via.placeholder.com/100" },
    { id: 17, name: "Haworthia", price: 10, img: "https://via.placeholder.com/100" },
    { id: 18, name: "Agave", price: 12, img: "https://via.placeholder.com/100" }
  ]
};

function ProductList() {
  const dispatch = useDispatch();
  const cartCount = useSelector(state => state.cart.totalQuantity);
  const [added, setAdded] = useState({});

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>
        <span>Cart: {cartCount}</span>
      </nav>

      {Object.keys(data).map(category => (
        <div key={category}>
          <h2>{category}</h2>
          {data[category].map(p => (
            <div key={p.id}>
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p>${p.price}</p>

              <button
                disabled={added[p.id]}
                onClick={() => {
                  dispatch(addItem(p));
                  setAdded({ ...added, [p.id]: true });
                }}
              >
                {added[p.id] ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
