import React,{useState} from 'react';
import './App.css';
//import OperatorMenu from './components/OperatorMenu';
import DisplayResult from './components/DisplayResult';

function App() {

  const [val1, setVal1]=useState(0);
  const [val2, setVal2]=useState(0);
  const [resultCalc, setResultCalc]=useState(0);
  //const [operation, setOperation]=useState('add');


  function OperatorMenu() {

    const Compute=()=>{
    //function computeAdd (calcType){
      let num1=document.querySelector('#add1').value
      let num2=document.querySelector('#add2').value
      //setVal1 = num1;
      if(num1==='')
      //num1 = 0;
      //setVal1 = 0;
      if(num2==='')
      num2 = 0;
      //if(operation === 'add')
      let answer = parseInt(num1) + parseInt(num2);
      setResultCalc(answer);
      //setOperation(calcType);
    }
  
    return (
        <form>
            <input value={val1} type="text" id="add1" class="inLine" onChange={event => setVal1(event.target.value)} />
            <select class="inLine" onChange={Compute}>
              <option value="add">&nbsp;+&nbsp;</option>
              <option value="subtract">&nbsp;-&nbsp;</option>
              <option>&nbsp;*&nbsp;</option>
              <option>&nbsp;/&nbsp;</option>
            </select>
            <input value={val2} type="text" id="add2" class="inLine" onChange={event => setVal2(event.target.value)} /> 
            
        </form>
  );
  }

  return (
      <div>
    <OperatorMenu />
    <DisplayResult resultCalc={resultCalc}/>
    </div>
    )
}

export default App;
