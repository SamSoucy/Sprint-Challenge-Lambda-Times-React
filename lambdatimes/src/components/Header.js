import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  max-width: 1280px;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  h1{
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }
`;

const DateTemp = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: right;
  margin-left: 25px;
  flex: 1;
`;





const Header = () => {
  return (
    <TopHeader>
      <DateTemp>SMARCH 32, 2018</DateTemp>
      <h1>Lambda Times</h1>
      <DateTemp>98°</DateTemp>
    </TopHeader>
  )
}

export default Header