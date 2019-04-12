import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./MY PHOTO.jpg";
class Nav extends Component{
    render(props){
        return(
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5" >
                <Link to='/'>
                    <img src="./MY PHOTO.jpg" alt="logo" className="navbar-brand" />
                </Link>
                <Link to='/'>
                    <h5 className="navbar-brand" >Products</h5>
                </Link>
                <Link to="/cart" className="ml-auto" >
                    <button>
                        CART{/* <i className="fas fa-cart-plus" /> */}
                    </button>
                </Link>
            </nav>
        )
    }
}
export default Nav;