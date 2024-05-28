import React, { Component } from 'react';
import Title from './Title';
import wallpaper from '../wallpaper.jpg';
import { ButtonContainer } from './Button';
import {Link} from 'react-router-dom';

export default class Homepage extends Component {

  componentDidMount() {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Enable scrolling when the component unmounts
    document.body.style.overflow = 'auto';
  }

  render() {
    return (
     <div className='container'>
        <div className='row'>
            <div className='col-md-6 text-center' style={{marginTop: '175px'}}>
                <Title name="Welcome to" title="Phone Store"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet commodo orci, non maximus turpis. Morbi accumsan nec justo quis gravida. </p>
                <Link to='/products'>
                <ButtonContainer>
                  Shop Now
                  <span className="ms-2">
                <i class="fa-solid fa-arrow-right"></i>
                </span>
                </ButtonContainer>
                </Link>
            </div>
            <div className='col-md-6'>
                <div className="container-fluid bg-container">
                  <img src={wallpaper} className="img-fluid bg-image" alt='placeholder'/>
                  </div>
            </div>
        </div>
     </div>
    )
  }
}
