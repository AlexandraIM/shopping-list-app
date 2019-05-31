import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import Product from '../../components/Product/Product';


class ProductList extends Component {
  constructor (props) {
    super(props);
    this.state = {
        name:'',
        quantity:0
    }
  }

  componentDidMount(){
    this.props.onGetProducts();
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.onProductAdd(this.state)
  }

  handleOnChange = (event) => {
    let value = event.target.value
    this.setState({[event.target.name]: value})
    return false;
  }

  handleRemove(id){
    this.props.onProductRemove(id)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" value={this.state.product} onChange={this.handleOnChange}/>
          <input name="quantity" type="number" value={this.state.product} onChange={this.handleOnChange}/>
          <button>Add product</button>
        </form>
        <ul>
          {this.props.products.map(product => (
            <Product key={product.id} clicked={() => this.handleRemove(product.id)} product={product}/>
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onProductAdd : (product) => dispatch(actions.addProduct(product)),
    onProductRemove: (id) => dispatch(actions.removeProduct(id)),
    onGetProducts: () => dispatch(actions.getProducts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);