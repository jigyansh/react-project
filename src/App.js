import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
        {/* header */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
             
     </div>
  );
}

export default App;
