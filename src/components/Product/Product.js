import React from 'react'

const Product = (props) => {
  return (
    <li onClick={props.clicked}>
      <div>{props.product.name}</div>
      <div>{props.product.quantity}</div>
    </li>
  )
}

export default Product