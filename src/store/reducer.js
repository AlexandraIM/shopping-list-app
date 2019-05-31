import * as actionTypes from './actionTypes';

const initialStore = {
  productList : []
}

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      let newProductList = store.productList.concat(action.product)
      return {
        ...store,
        productList:newProductList
      }
    case actionTypes.REMOVE_PRODUCT:
      let newList = store.productList.filter(product => product.id != action.id)

      return {
        ...store,
        productList: newList
      }
    case actionTypes.SET_PRODUCTS:
      return {
        ...store,
        productList: action.products
      }
    default:
      return store;
  }
}

export default reducer;