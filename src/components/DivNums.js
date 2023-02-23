import React,{useState, useEffect} from 'react';

function DivNums() {

  const [resultDivide, setResultDivide]=useState(0);

  const computeDivide=()=>{
    let num1=document.querySelector('#div1').value
    let num2=document.querySelector('#div2').value
    if(num1==='')
    num1 = 0;
    if(num2==='')
    num2 = 1;
    let sum = parseInt(num1) / parseInt(num2);
    setResultDivide(sum);
  }

  return (
      <form>
            <input type="text" id="div1" class="inLine" onChange={computeDivide} />
            <p class="inLine">&nbsp;/&nbsp;</p>
            <input type="text" id="div2" class="inLine" onChange={computeDivide} /> 
            <p class="inLine">&nbsp;=&nbsp;</p>
            <p class="inLine">{resultDivide}</p> 
      </form>
);
}
export default DivNums;