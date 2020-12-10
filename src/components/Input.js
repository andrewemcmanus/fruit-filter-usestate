// import React, { Component } from 'react';

function Input(props) {
  return(
    <div>
      <label htmlFor="fruit-filter"> Filter these fruits! </label>
      <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
    </div>
  )
}

export default Input;

// // "Value" is defined in the FruitContainer
// // "onChange": see FruitContainer
// class Input extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//
//     };
//   }
//   render() {
//     return (

//     )
//   }
// }
//
