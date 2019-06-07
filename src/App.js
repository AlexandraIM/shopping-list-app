import React from 'react'
import styled from 'styled-components';
import ProductForm from './containers/ProductForm/ProductForm';
import ProductList from './containers/ProductsList/ProductList';
import Modal from './containers/Modal/Modal';
import Header from './containers/Header/Header';
import useModal from './hooks/useModal';

const Layout = styled.div`
  margin: 0 auto;
`

const App = () => {
  const {isShowing, toggle} = useModal();

  return (
    <Layout>
    <Header/>
      <button onClick={toggle}>show modal</button>
      <ProductList></ProductList>
      <Modal isShowing={isShowing} hide={toggle}>
        <ProductForm/>
      </Modal>
    </Layout>
  )
}

export default App;