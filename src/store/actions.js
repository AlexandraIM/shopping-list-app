import * as actionsType from './actionTypes';

export const startAddProduct = (product) => {
  return {
    type: actionsType.ADD_PRODUCT,
    product: product
  }
}

export const addProduct = (product) => {
  return {
    type: actionsType.ADD_PRODUCT,
    product: product
  }
}

export const removeProduct = (productId) => {
  return {
    type: actionsType.REMOVE_PRODUCT,
    id: productId
  }
}

export const getProducts = () => {
  return {
    type: actionsType.GET_PRODUCTS
  }
}

export const setProducts = (products) => {
  return {
    type: actionsType.SET_PRODUCTS,
    products: products
  }
}