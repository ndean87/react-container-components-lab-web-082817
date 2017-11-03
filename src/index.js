import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer apiCall={URL} />
    <LatestMovieReviewsContainer apiCall={URL} />
  </div>,
  document.getElementById('root')
);
