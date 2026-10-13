
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { additem } from './CartSlice';

const categories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 15, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b30?w=400' },
      { id: 2, name: 'Peace Lily', price: 18, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' },
      { id: 3, name: 'Spider Plant', price: 12, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400' },
      { id: 4, name: 'Rubber Plant', price: 20, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
      { id: 5, name: 'Areca Palm', price: 22, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400' },
      { id: 6, name: 'Boston Fern', price: 14, image: 'https://images.unsplash.com/photo-1597055181300-df1cb9e9e9f3?w=400' }
    ]
  },
  {
    name: 'Low Maintenance Plants',
    plants: [
      { id: 7, name: 'ZZ Plant', price: 16, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
      { id: 8, name: 'Jade Plant', price: 10, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
      { id: 9, name: 'Aloe Vera', price: 9, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
      { id: 10, name: 'Jade Succulent', price: 11, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
      { id: 11, name: 'Pothos', price: 13, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400' },
      { id: 12, name: 'Cast Iron Plant', price: 19, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' }
    ]
  },
  {
    name: 'Decorative Plants',
    plants: [
      { id: 13, name: 'Monstera', price: 25, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
      { id: 14, name: 'Calathea', price: 21, image: 'https://images.unsplash.com/photo-1600411832986-5a447c5c4c6e?w=400' },
      { id: 15, name: 'Fiddle Leaf Fig', price: 28, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
      { id: 16, name: 'Bird of Paradise', price: 30, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400' },
      { id: 17, name: 'Chinese Money Plant', price: 17, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
      { id: 18, name: 'Anthurium', price: 24, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="product-page" id="plants">
      <h1>Our Houseplants</h1>

      {categories.map(category => (
        <section key={category.name}>
          <h2>{category.name}</h2>

          <div className="plant-grid">
            {category.plants.map(plant => {
              const added = cartItems.some(
                item => item.id === plant.id
              );

              return (
                <article className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>

                  <button
                    disabled={added}
                    onClick={() => dispatch(additem(plant))}
                  >
                    {added ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
