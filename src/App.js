import React,{useState, useEffect} from 'react';
import './App.css';
import AddNums from './components/AddNums';
import SubtractNums from './components/SubtractNums';
import MultNums from './components/MultNums';
import DivNums from './components/DivNums';


function App() {

  return (
    <div>
    <AddNums />
    <SubtractNums />
    <MultNums />
    <DivNums />
    </div>
    
  );
}

export default App;
