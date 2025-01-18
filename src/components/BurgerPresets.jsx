import React, { useState } from 'react';
import '../styles/BurgerPresets.css';

// Array of burger data with ingredients
const BurgerPresets = () => {
  const burgers = [
    {
      id: 1,
      name: 'Classic Chicken Burger',
      image: 'https://5.imimg.com/data5/GR/GX/MY-48605426/veg-burger-500x500.jpg',
      description: 'A classic chicken burger with fresh lettuce, tomato, and cheese.',
      price: '225',
      ingredients: ['white bread', 'chicken patty', 'lettuce', 'tomato', 'onion', 'ketchup', 'mozzarella cheese']
    },
    {
      id: 2,
      name: 'American Cheese Burger',
      image: 'https://imgs.search.brave.com/yZ-tLAAh_akJCYWEam_EFHtIXluW53FGX9V40p-qBBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDcx/NDU2MDYxL3Bob3Rv/L2hhbWJ1cmdlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SjJEV2R4TU51M1A5/NkJEQ2J1TWRJM0R1/TG8zMjRzNEJBaVZD/dXExUDQzZz0',
      description: 'A juicy burger with American cheese, pickles, and a special sauce.',
      price: '275',
      ingredients: ['multigrain bread', 'chicken patty', 'lettuce', 'tomato', 'onion', 'mushroom','ketchup' ,'mayo' , 'american cheese' ] 
    },

    {
      id: 3,
      name: 'Veggie Burger',
      image: 'https://5.imimg.com/data5/VN/YO/MY-33353830/mcveggie-burger-500x500.png',
      description: 'A delicious plant-based burger with a blend of fresh veggies.',
      price: '215',
      ingredients: ['white bread', 'veggie patty', 'lettuce', 'tomato', 'onion', 'ketchup' ,'mayo' , 'american cheese' ]
    },
    {
      id: 4,
      name: 'Multigrain Paneer Burger',
      image: 'https://imgs.search.brave.com/o6hsMcDO-r5M4St36alaHaNRaYZFUjsRFbRSSeTZ8p8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9PUi9LSC9NWS0z/MzM1MzgzMC9tY3Nw/aWN5LXBhbmVlci1i/dXJnZXItMTAwMHgx/MDAwLnBuZw',
      description: 'Grilled paneer patty in a crispy multigrain bun with Indian spices.',
      price: '240',
      ingredients: ['whole wheat bread', 'paneer patty', 'lettuce', 'tomato', 'onion','bbq' , 'cheddar cheese' ] 
    },
    {
      id: 5,
      name: 'Mushroom Swiss Burger',
      image: 'https://5.imimg.com/data5/JP/SF/MY-33353830/mcdonald-veg-maharaja-mac-burger.png',
      description: 'A savory mushroom burger topped with melted Swiss cheese.',
      price: '270', 
      ingredients: ['whole wheat bread', 'veggie patty', 'lettuce', 'tomato', 'onion', 'mushroom','bbq' ,'mayo' , 'swiss cheese' ] 
    },
    {
      id: 6,
      name: 'Chicken Burger',
      image: 'https://5.imimg.com/data5/WG/ZB/HH/SELLER-10316784/tasty-chicken-burger-500x500.jpg',
      description: 'Crispy fried chicken burger with bbq and mayo.',
      price: '230',
      ingredients: ['whole wheat bread', 'chicken patty', 'lettuce', 'tomato', 'onion','mustard', 'american cheese']

    },
    {
      id: 7,
      name: 'Mutton Burger',
      image: 'https://5.imimg.com/data5/RB/OM/MY-24590086/veg-burger-500x500.jpg',
      description: 'Mutton Patty with bbq sauce in a warm soft bun.',
      price: '345',
      ingredients: ['multigrain bread', 'mutton patty', 'lettuce', 'tomato', 'onion', 'mushroom','avocado','bbq', 'cheddar cheese']
    },
    {
      id: 8,
      name: 'Avacado Veggie Burger',
      image: 'https://5.imimg.com/data5/GS/WH/MY-33353830/mcdonald-veg-supreme-mcmuffin-burger.png',
      description: 'Juicy patty with creamy avocado and crispy veggie patty for a flavor-packed delight.',
      price: '330',
      ingredients: ['gluten free bread', 'veggie patty', 'lettuce', 'tomato', 'onion','avocado','mushroom', 'bbq','mayo', 'swiss cheese']
    }];

  const [addedBurgers, setAddedBurgers] = useState({});

  const addBurger = (burger) => {
    setAddedBurgers((prev) => {
      const newCount = prev[burger.id] ? prev[burger.id] : { count: 0, ingredients: burger.ingredients };
      return { ...prev, [burger.id]: { count: newCount.count + 1, ingredients: newCount.ingredients } };
    });
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px', 
      marginTop:'60px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px 0'
      }}>
        {burgers.map((burger) => (
          <div key={burger.id} style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              padding: '12px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <img
                src={burger.image}
                alt={burger.name}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '12px'
                }}
              />
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                textAlign: 'center',
                margin: '0 0 12px 0',
                color: '#333'
              }}>
                {burger.name}
              </h3>
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#666', 
                textAlign: 'center', 
                margin: '0 0 8px 0' 
              }}>
                {burger.description}
              </p>
              <p style={{ 
                fontSize: '1rem', 
                fontWeight: '600', 
                textAlign: 'center', 
                margin: '0 0 12px 0', 
                color: '#333' 
              }}>
                ₹{burger.price}
              </p>
              <button 
                onClick={() => addBurger(burger)}
                style={{
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'background-color 0.2s',
                  marginTop:'auto'
                }}
                
                onMouseOver={(e) => e.target.style.backgroundColor = '#ff2222'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#ff4444'}
              >
                Add
              </button>
              {addedBurgers[burger.id] && (
                <p style={{ textAlign:'center', marginTop:'8px' }}>
                  Count in Cart: {addedBurgers[burger.id].count}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Display selected burgers as cards */}
      <div style={{ marginTop:'40px' }}>
        <h2>Selected Burgers:</h2>
        {Object.keys(addedBurgers).length === 0 ? (
          <p>No burgers added yet.</p>
        ) : (
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(3, minmax(250px, 1fr))',
            gap:'20px'
          }}>
            {Object.keys(addedBurgers).map((id) => (
              <div key={id} style={{
                border:'1px solid #e0e0e0',
                borderRadius:'8px',
                padding:'12px',
                backgroundColor:'white',
                boxShadow:'0 2px 4px rgba(0,0,0,0.1)',
              }}>
                <h3 style={{ textAlign:'center' }}>{burgers.find(b => b.id === parseInt(id)).name}</h3>
                <p style={{ textAlign:'center' }}>Count in Cart: {addedBurgers[id].count}</p>
                <p style={{ textAlign:'center' }}>Price per Burger:<br /> ₹{burgers.find(b => b.id === parseInt(id)).price}</p>
                <h4>Ingredients:</h4>
                <ul style={{ listStyleType:'none', paddingLeft:'0' }}>
                  {addedBurgers[id].ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerPresets;