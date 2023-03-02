import React, { useState } from "react";
import "./style.css";


const Cal = () => {
const [calculator, setCalculator]=useState("")
const [result, setResult]=useState("")

const operator=['/','*','-','+','=', '%' , '.'];

const updateCalc =(value)=>{
  if(operator.includes(value) && calculator==='' ||
     operator.includes(value) && operator.includes(calculator.slice(-1)) )
{
 return ;
}

     setCalculator(calculator+value);
     if(!operator.includes(value)){
      setResult(eval(calculator+value))
     }
}
const calculate=()=>{
 try{
  setCalculator(eval(calculator))
 } catch(error){

 }
}


const clearLast=()=>{
  try{
    setCalculator(calculator.slice(0, -1))
  }catch(error){
setCalculator("")
  }


}

  return (
    <div className="calculator">
      <div className="output">
        <div className="pre-operand">{result ? <span></span>: ''}{calculator || 0}</div>
          
          </div>
          <button onClick={clearLast}>C</button>
          <button onClick={()=>updateCalc('+/-')}>+/-</button>
          <button onClick={()=>updateCalc('%')}>%</button>
          <button onClick={()=>updateCalc('/')} className="color-change">/</button>
          <button onClick={()=>updateCalc('7')}>7</button>
          <button onClick={()=>updateCalc('8')}>8</button>
          <button onClick={()=>updateCalc('9')}>9</button>
          <button onClick={()=>updateCalc('*')} className="color-change">*</button>
          <button onClick={()=>updateCalc('4')}>4</button>
          <button onClick={()=>updateCalc('5')}>5</button>
          <button onClick={()=>updateCalc('6')}>6</button>
          <button onClick={()=>updateCalc('-')} className="color-change">-</button>
          <button onClick={()=>updateCalc('1')}>1</button>
          <button onClick={()=>updateCalc('2')}>2</button>
          <button onClick={()=>updateCalc('3')}>3</button>
          <button onClick={()=>updateCalc('+')} className="color-change">+</button>
          <button  onClick={()=>updateCalc('0')} className="span-two">0</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={calculate} className="color-change">=</button>
        </div>
    
  );
};

export default Cal;



