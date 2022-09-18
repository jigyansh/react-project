 import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./header";
import Sidebar from "./Sidebar";
import Login from "./Login.js";
 
function App() {  
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header /> 
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div> 
  ); 
}

export default App; 
