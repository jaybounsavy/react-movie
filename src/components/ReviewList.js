import React from 'react';

export default class ReviewList extends React.Component {
    
    constructor(props) {
        super(props);
      } 
      

    
    render() {
  
      let reviewUser = this.props.review;
      console.log ("reviewUser = " + reviewUser );

      return( 
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
             <div className="col-md-12 col-xl-4">
                {reviewUser}
            </div>
          </div>
        </div>

      );
    }
  
  }