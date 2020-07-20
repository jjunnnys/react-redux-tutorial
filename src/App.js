import React from 'react';
import ConuterContainer from './containers/ConuterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <ConuterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
