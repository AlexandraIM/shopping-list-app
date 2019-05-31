import {put,takeEvery, take} from 'redux-saga/effects';
import productsRef from '../firebase';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import { eventChannel } from 'redux-saga';

function* addProductSaga(action){
  try{
     yield productsRef.push().set(action.product);
  } catch(error){
    console.log(error);
  }
}

function* getProductsSaga(action){
  const channel = new eventChannel(emiter => {
    const listener = productsRef.on("value", snap => {
      emiter({data: snap.val() || {}})
    })
    return listener;
  })
  while(true){
    const {data} = yield take(channel)
    const products = Object.keys(data).map(key => {
    return {
      id: key,
      ...data[key]
    }
  })
  yield put(actions.setProducts(products))
  }
  
}

function* removeProductSaga(action){
  try{
    yield productsRef.child(action.id).remove()
  } catch (error){
    console.log(error);
  }
}
export function* watchProducts(){
  yield takeEvery(actionTypes.ADD_PRODUCT,addProductSaga);
  yield takeEvery(actionTypes.GET_PRODUCTS,getProductsSaga);
  yield takeEvery(actionTypes.REMOVE_PRODUCT, removeProductSaga);
}