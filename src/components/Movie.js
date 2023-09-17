import React from 'react';
import Stars from './Stars';
import MovieImage from './MovieImage';
import ReviewList from './ReviewList';


export default class Movie extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {

    const photo = this.props.movie?.photo;
    const title = this.props.movie.title;
    const description = this.props.movie.description;

    let currentRating = this.props.movie.rating;

    let reviews = [];

    reviews.push (
      <div className="mt-3 mb-4">My first comment</div>
      );

    reviews.push (
      <div className="mt-3 mb-4">My second comment</div>
      );


    reviews.push (
      <div className="mt-3 mb-4">My third comment</div>
      );

    
    let simpleReview = "This is my simple review.";



    function handleRating( rating ) {
      console.log( rating );
      currentRating = rating;
    }

    return(
      <div className="card" style={ { borderRadius: '15px' } }>
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <MovieImage photo={ photo } />
          </div>
          <h4 className="mb-2">{ title }</h4>
          <p className="text-muted mb-4">{ description } </p>
          <Stars rating={ currentRating }  onRating={ handleRating} />

          <div className="mt-3 mb-4">
             { reviews }
          </div>   

          <div className="mt-3 mb-4">
             <ReviewList review={ simpleReview }  />
          </div>  

        </div>
      </div>
    );
  }
}