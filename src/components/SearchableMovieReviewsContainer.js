import React, { Component } from 'react';
import MovieReviews from './MovieReviews'


export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSearch = (event) => {
    event.preventDefault()

    let searchTerm = this.state.searchTerm
    console.log(this.props.apiCall)

    fetch(`${this.props.apiCall}&query=${searchTerm}`)
      .then(res => res.json())
      .then(reviews => this.setState({
        reviews: reviews.results,
        value: ''
      }))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearch}>
          <label name="Search Reviews"></label>
          <input type="text"  id="search-reviews" onChange={this.handleChange} value={this.state.value} />
          <input type="submit"/>
        </form>
        <div className="showReviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }
}
