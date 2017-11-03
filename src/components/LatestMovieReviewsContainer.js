import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
    }
  }

  componentWillMount() {
    fetch(this.props.apiCall)
    .then(res => res.json())
    .then(json => this.setState({ reviews: json.results }))
  }


  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
