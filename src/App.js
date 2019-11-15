import React from 'react';
import './App.css';
import Search from './components/Search';
import styled from 'styled-components';

const StyledApp = styled.div`
`

function App() {
  return (
    <StyledApp className="App">
      <header className="App-header">
        <Search/>
      </header>
    </StyledApp>
  );
}

export default App;
