// import StarRatings from './react-star-ratings';
 

// class Bar extends Component {
//   render() {
//     // aggregateRating = 2.35;
//     return (
//       <StarRatings
//         rating={2.403}
//         starDimension="40px"
//         starSpacing="15px"
//       />
//     );
//   }
// }

// export default Bar;
import React, { Component } from 'react';
import StarRating from 'react-bootstrap-star-rating';
import { render } from 'react-dom';
 
class Bar extends Component {
  render() {
    return (
      <StarRating
        defaultValue={5}
        min={0}
        max={10}
        step={0.5} />
    );
  }
}
 
render(<Bar />, document.getElementById('app'));