import React from 'react';
import './App.css';
import Search from './components/Search';
import styled from 'styled-components';

const StyledApp = styled.div`
background-color: #0a6fba;
min-height: 100vh;
color: white;
`

function App() {
  return (
    <StyledApp className="search-box">
        <Search/>
    </StyledApp>
  );
}

export default App;
