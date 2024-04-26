import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
//Context

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    }
    componentDidMount() {
      this.setProducts();
    }

    
    handleDetail = () => {
        console.log('hello from detail');
    }
    addToCart = (id) => {
        console.log(`hello from add to cart. id is ${id}`);
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { products:tempProducts }
        })
    }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };