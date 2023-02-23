import React,{useState, useEffect} from 'react';

function AddNums() {

  const [resultSum, setResultSum]=useState(0);

  const computeAdd=()=>{
    let num1=document.querySelector('#add1').value
    let num2=document.querySelector('#add2').value
    if(num1==='')
    num1 = 0;
    if(num2==='')
    num2 = 0;
    let sum = parseInt(num1) + parseInt(num2);
    setResultSum(sum);
  }

  return (
      <form>
            <input type="text" id="add1" class="inLine" onChange={computeAdd} />
            <p class="inLine">&nbsp;+&nbsp;</p>
            <input type="text" id="add2" class="inLine" onChange={computeAdd} /> 
            <p class="inLine">&nbsp;=&nbsp;</p>
            <p class="inLine">{resultSum}</p> 
      </form>
);
}
export default AddNums;