import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const plantsData = {
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
  const cartItems = useSelector(state => state.cart.items);

  const [addedItems, setAddedItems] = useState({});

  // ✅ Correct total count (not just length)
  const totalCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div>

      {/* ✅ NAVBAR WITH LINKS */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#eee" }}>
        <h2>Paradise Nursery</h2>

        <div>
          <Link to="/">Home</Link> |{" "}
          <Link to="/plants">Plants</Link> |{" "}
          <Link to="/cart">Cart ({totalCount})</Link>
        </div>
      </nav>

      {/* ✅ PRODUCT LIST */}
      {Object.keys(plantsData).map(category => (
        <div key={category} style={{ padding: "20px" }}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plantsData[category].map(plant => (
              <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
                
                <img src={plant.img} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                {/* ✅ BUTTON DISABLE LOGIC */}
                <button
                  disabled={addedItems[plant.id]}
                  onClick={() => {
                    dispatch(addItem(plant));
                    setAddedItems({
                      ...addedItems,
                      [plant.id]: true
                    });
                  }}
                >
                  {addedItems[plant.id] ? "Added" : "Add to Cart"}
                </button>

              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}

export default ProductList;
