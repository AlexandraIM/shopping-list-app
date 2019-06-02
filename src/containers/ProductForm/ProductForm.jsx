import React, {useState} from "react";
import {connect} from 'react-redux';
import Button from '../../components/Button/Button';
import * as actions from '../../store/actions';


const ProductForm = (props) => {
    let [product, setState] = useState({name:'',quantity:0})

    function handleOnChange(event){
        event.persist();
        let value = event.target.value;
        let name = event.target.name;
        setState((product => ({...product,[name]:value})))
    }

    function handleOnSubmit(event){
        event.preventDefault()
        props.onProductAdd(product);
    }

    return (
        <form onSubmit={handleOnSubmit}>
          <input name="name" value={product.name} onChange={handleOnChange}/>
          <input name="quantity" type="number" value={product.quantity} onChange={handleOnChange}/>
          <Button>Add product</Button>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      onProductAdd : (product) => dispatch(actions.addProduct(product)),
    }
  }

export default connect(null, mapDispatchToProps)(ProductForm);