import { useState } from 'react';

const MAX_RATING = 5;

export default function Stars(props) {

    const [ rating, setRating ] = useState(props.rating || 0 );

    const maxRating = props.maxRating || MAX_RATING;



    function handleClick(e) {
        //console.log('handleClick',e);

        let rating = e.target.dataset['rating'];
        console.log( rating );
        setRating(rating);

        // call a function in the parent class to set the rating
        if ( props.onRating ) {
            // call a function in the parent and pass the rating
            props.onRating( rating );
        }

    }



    let elements = [];

    for ( let index = 0; index < maxRating; index++ ) {

        let className = 'bi bi-star';

        if ( index < rating ) {
            className = 'bi bi-star-fill';
        }

        elements.push (
            <i key={ index } className={ className } data-rating= { index + 1 }></i>
        );
    }

    return(
        <div data-rating={ rating }  onClick={ handleClick }  >
            { elements }
        </div>
    );
  }