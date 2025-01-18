import WorkingHours from './WorkingHours'; 
import Review from './Review'; 
import SocialLink from './SocialLink';
import React from 'react';
import Footer from './Footer'; 
export default function Contact () {
  const reviews = [
    { stars: 5, text: "\"Best burger joint in town!\" \I've never had a burger so juicy and full of flavor! The custom toppings selection is such a goooood feature, and the buns? Toasted to perfection! I'm officially addicted.\"" },
    { stars: 4, text: "\"Great experience!\" \Loved the creative options on the menu! The vegetarian burger blew my mind. Ordering a burger has never been this easy . Will definitely come back.\"" },
    { stars: 5, text: "\"My new go-to burger place\" \This is hands down the best burger I've ever had. Interactive menu selection website with so much variety . Fresh ingredients, amazing sauces, and perfectly cooked patties. Plus, the atmosphere is super chill and welcoming.\"" },
    { stars: 3, text: "\"Solid burger, but a bit pricey\" \"Burgers were really tasty, but I felt the prices were a little high for what you get. The burger ordering system is such an amazing add-on to the food ordering procedure , makes everything so seamless.  That being said, I'll still come back because the quality is unbeatable.\"" },
    { stars: 5, text: "\"The perfect burger experience\" \"The Burger Builder allows you to create your dream burger. I went crazy with the toppings, and every bite was better than the last. Fast service and friendly staff made it even better.\"" }
  ];

  return (

    <div>
    <section id="contact">
      <h2>Contact Us</h2>
      
      <div className="container">
        <div className="grid">
          <div className="contact-info">
            <div>
              <h3>TELEPHONE</h3>
              <p>9876543XXX</p>
            </div>
            
            <div className="social-container">
              <div className="social-header">
                <h3>INSTAGRAM</h3>
                <SocialLink />
              </div>
              <p>@burgerbuilder</p>
            </div>
            
            <div>
              <h3>ADDRESS</h3>
              <p>100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085</p>
            </div>
            
            <WorkingHours />
          </div>
          
          <div>
            <h3>REVIEWS</h3>
            {reviews.map((review, index) => (
              <Review key={index} {...review} />
            ))}
          </div>
        </div>
      </div>

     

    </section>
            <Footer/>
    </div>
  );
};
