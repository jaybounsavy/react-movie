import React from 'react';
import './App.css';

import MovieList from './components/MovieList';


export default class App extends React.Component {
  render() {

    return( 
          <div className="row d-flex justify-content-center align-items-center h-100">
              <MovieList />
          </div>
      
    );
  }

}
