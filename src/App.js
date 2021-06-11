import React from 'react';
import Nav from './components/Nav.js';
import Dashboard from './components/Dashboard.js'
function App() {
  return (
    <div>
      <Nav>
          <Dashboard></Dashboard>
      </Nav>
    </div>
  );
}

export default App;
