import React from 'react'
import styled from 'styled-components';

import ProductList from './containers/ProductsList/ProductList';

const Layout = styled.div`
  width: 90%;
  margin: 0 auto;
`

const App = () => {
  return (
    <Layout>
      <ProductList></ProductList>
    </Layout>
  )
}

export default App;