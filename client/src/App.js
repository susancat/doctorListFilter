import React from 'react';
import { Container } from 'semantic-ui-react';

import Title from './component/Title';
import Introduction from './component/Introduction';
import Filters from './component/Filters';

function App() {
  return (
    <Container style={{marginTop:'5rem'}}>
      <Title />
      <Introduction />
      <Filters />
    </Container>
  );
}

export default App;
