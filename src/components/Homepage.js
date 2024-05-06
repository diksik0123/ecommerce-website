import React, { Component } from 'react';
import Title from './Title';
import wallpaper from '../wallpaper.jpg';
import { ButtonContainer } from './Button';
import {Link} from 'react-router-dom';

export default class Homepage extends Component {

  componentDidMount() {
    // Disable scroll on mount
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Re-enable scroll on unmount
    document.body.style.overflow = '';
  }

  render() {
    return (
     <div className='container'>
        <div className='row'>
            <div className='col-md-6 text-center' style={{marginTop: '120px'}}>
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
                <div className="ms-5" style={parallelogram}>
                  <img src={wallpaper} className='img-fluid ms-5' alt='placeholder' style={img}/>
                  </div>
            </div>

        </div>
     </div>
    )
  }
}

const parallelogram = {
  position: 'absolute',
	transform: 'skew(-25deg)',
}

const img = {
  transform: 'skew(20deg)',
  position: 'relative'
}

