import React from 'react';

// Code MovieReviews Here

const MovieReviews = ({ reviews }) => {

  const showReviews = () => {
    return reviews.map((review, i) => (
      <li key={i} className="review">{review.display_title}</li>
    ))
  }

  MovieReviews.defaultProps = {
    reviews: []
  };

  return(
    <ul className="review-list">
      {showReviews()}
    </ul>
  )
}

export default MovieReviews;
