import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Genre from './components/Genre/Genre';
import Mainews from './components/Mainews/Mainews';
import 'font-awesome/css/font-awesome.min.css';



function App() {
  return (
    <div>
      <Header />
      <Genre />
      <Mainews />
    </div>
  );
}

export default App;
