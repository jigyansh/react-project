import React from 'react';
import './App.css';
import Header from './header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
        {/* header */}
      <div className="app__body">
        <Sidebar />
      </div>
             
     </div>
  );
}

export default App;
