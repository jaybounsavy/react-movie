import React from 'react';

import Movie from './Movie';



let movie1 = {
    id: '1',
    title: 'Avatar',
    description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    photo: 'avatar.jpg',
    rating: 2
  }

  let movie2 = {
    id: '2',
    title: 'Titanic',
    description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    photo: 'titanic.jpg',
    rating: 3
  }
    
  
export default class MovieList extends React.Component {
  render() {

    const sectionStyle = {
      backgroundColor: '#eee'
    };
    return( 
      <section className="vh-100" style={ sectionStyle } >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">

          <div className="col-md-12 col-xl-4">
            <Movie movie={ movie1 } />
            <Movie movie={ movie2 } />
          </div>
        </div>
      </div>
    </section>
    );
  }

}