import React from 'react';
import Todos from './components/Todos';
import ConuterContainer from './containers/ConuterContainer';

const App = () => {
  return (
    <div>
      <ConuterContainer />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
