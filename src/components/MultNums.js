import React,{useState} from 'react';

function MultNums() {

  const [resultMultiply, setResultMultiply]=useState(0);

  const computeMultiply=()=>{
    let num1=document.querySelector('#mult1').value
    let num2=document.querySelector('#mult2').value
    if(num1==='')
    num1 = 0;
    if(num2==='')
    num2 = 0;
    let sum = parseInt(num1) * parseInt(num2);
    setResultMultiply(sum);
  }

  return (
    <form>
         <input type="text" id="mult1" class="inLine" onChange={computeMultiply} />
          <p class="inLine">&nbsp;*&nbsp;</p>
          <input type="text" id="mult2" class="inLine" onChange={computeMultiply} /> 
          <p class="inLine">&nbsp;=&nbsp;</p>
          <p class="inLine">{resultMultiply}</p> 
    </form>
);
}
export default MultNums;