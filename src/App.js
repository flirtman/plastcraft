import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Route from './pages/Route';

const configs = {
};

function App() {
  return (
      <div className="App">
        <Route configs={configs}/>
      </div>
  );
}

export default App;
