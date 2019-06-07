import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import Product from '../../components/Product/Product';



 const ProductList = (props) => {
  
  useEffect(() => {
    props.onGetProducts();
  },[props.products])
 

  function handleRemove(id){
    props.onProductRemove(id)
  }

    return (
        <ul>
          {props.products.map(product => (
            <Product key={product.id} clicked={() => handleRemove(product.id)} product={product}/>
            ))}
        </ul>
    )
  
}

const mapStateToProps = (state) => {
  return {
    products: state.productList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onProductRemove: (id) => dispatch(actions.removeProduct(id)),
    onGetProducts: () => dispatch(actions.getProducts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);