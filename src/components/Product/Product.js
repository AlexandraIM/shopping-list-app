import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  font-size: 22px;
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 7px;
  border: 1px solid grey;
  padding: 5px;
`

const Product = (props) => {
  return (
    <StyledListItem onClick={props.clicked}>
      <div>{props.product.name}</div>
      <div>{props.product.quantity}</div>
    </StyledListItem>
  )
}

export default Product