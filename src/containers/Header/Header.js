import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.nav`
  background-color: #333;
  overflow: hidden;
  height: 30px;
  widht:100%;

`

const Header = () => {
  return <StyledHeader/>
}

export default Header;