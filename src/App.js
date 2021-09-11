import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chatbar from "./Chatbar";
import Chatpage from "./Chatpage";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chatbar />
      <Chatpage />
    </div>
  );
}

export default App;
