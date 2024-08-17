// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h1>User Activity Dashboard</h1>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
