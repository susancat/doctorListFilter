import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Title from './component/Title';
import Introduction from './component/Introduction';
import FilterRow from './component/FilterRow';

import './App.css';

function App() {
  return (
    <Container style={{marginTop:'5rem'}}>
      <Title />
      <Introduction />
      <FilterRow />
    </Container>
  );
}

export default App;
