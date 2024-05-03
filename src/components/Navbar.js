import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonContainer } from './Button';
import styled from 'styled-components';

export default class navbar extends Component {
  render() {
    return <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

  <Link to="/" className='text-decoration-none fs-3'>
    <img src={logo} alt="store" className="navbar-brand mb-1"/>
    <span  style={{color:'var(--mainWhite)'}}>Navbar</span>
    </Link>
    
    <div className='ms-auto my-2 d-flex justify-content-end gap-4'>
    <Link to="/products">
        <ButtonContainer>
        <span className="me-2">
        <i className="fas fa-store" />
        </span>
        shop
      </ButtonContainer>
    </Link>
    <Link to="/cart">
      <ButtonContainer>
        <span className="me-2">
        <i className="fas fa-cart-plus" />
        </span>
        cart
      </ButtonContainer>
    </Link>
    </div>

    </NavWrapper>;
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
  color:var(--mainWhite) !important;
  font-size:1.3rem;
  text-transform:capitalize;
}
`;