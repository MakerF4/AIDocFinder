import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <section className="reviews">
      
      <div className="reviews__header">
        <h2>Reviews</h2>
        
        <div className="reviews__rating">
          <span>★</span>
          <span>★</span>  
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>

      <div className="reviews__list">
        <article className="review">
          <div className="review__header">
            <h4 className="review__title">Great product!</h4>  
            <div className="review__rating">⭐⭐⭐⭐⭐</div>
          </div>
          
          <p className="review__text">
            I really like this product. It has worked very well for me and would highly recommend.  
          </p>

          <div className="review__author">
            
            <div>
              John Smith <span className="date">- Jan 20, 2023</span>
            </div> 
          </div>
        </article>

        {/* More reviews */}
      </div>
      
    </section>
  ); 
}

export default Reviews;