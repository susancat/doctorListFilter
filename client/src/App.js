import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import Title from './component/Title';
import Introduction from './component/Introduction';
import FilterRow from './component/FilterRow';
import Labels from './component/Labels';
import ListCard from './component/ListCard';

import './App.css';

function App() {
  return (
    <div className="container">
      <Title />
      <Introduction />
      <FilterRow />
    </div>
  );
}

export default App;
