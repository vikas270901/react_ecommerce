import React, { Component } from 'react'
import Product from './Product';
import { Consumer } from "../Context";
export default class 
 extends Component {
  render() {
    return (
      <>
        <Consumer>
          {
            inputhello => {
              return <h1>{inputhello}</h1>
            }
          }
        </Consumer>
      </>
    )
  }
}
