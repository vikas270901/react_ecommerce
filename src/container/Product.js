import React, { Component } from 'react'
import Title from './Title';
import {data} from './Data';
import { provider } from "../Context";
export default class Product extends Component {
    state = {
      prdct: data
    }
  render() {
    console.log(this.state.prdct);
    return (
      <React.Fragment>
        <Title name="OUR" title="Products" />
        {/* <Data  /> */}
      <React.Fragment/>
    )
  }
}
