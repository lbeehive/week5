import React,{useState} from 'react';

function SubtractNums() {

  const [resultSubtract, setResultSubtract]=useState(0);

  const computeSubtract=()=>{
    let num1=document.querySelector('#sub1').value
    let num2=document.querySelector('#sub2').value
    if(num1==='')
    num1 = 0;
    if(num2==='')
    num2 = 0;
    let sum = parseInt(num1) - parseInt(num2);
    setResultSubtract(sum);
  }

  return (
    <form>
         <input type="text" id="sub1" class="inLine" onChange={computeSubtract} />
          <p class="inLine">&nbsp;-&nbsp;</p>
          <input type="text" id="sub2" class="inLine" onChange={computeSubtract} /> 
          <p class="inLine">&nbsp;=&nbsp;</p>
          <p class="inLine">{resultSubtract}</p> 
    </form>
 );
}
export default SubtractNums;