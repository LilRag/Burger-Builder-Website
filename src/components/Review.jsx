import React from 'react';
export default function Review({ stars, text }) {
  return (
    <div className="review">
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="star">
            {i < stars ? '★' : '☆'}
          </span>
        ))}
      </div>
      <p>{text}</p>
    </div>
  );
}