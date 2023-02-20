
import {React, useContext} from 'react'
import { calcContext } from '../pages/CalcContext'
import "./keys.css"

function Keys() {
 const {value, setValue, converter, setUnits, units } = useContext(calcContext)

 const keys =[]  

//  TYPING KEYS
 const handleKeys =  (e) =>{

     keys.push(e.target.value)
     console.log("values are ")
     let data = e.target.value
     console.log(data)
     if( data === "Area"|| data === "Volume" || data === "Length" || data === "Time"|| data === "Weight"){
       
       console.log("If working");
       console.log(data);
       setUnits(data)
       console.log(units);
      }
      else{
        // setValue([...value, keys])
        setValue(value + data)
        console.log("Not working");
      }
 
  }
  //  CLEARING SCREEN
  const handleClear = () =>{
        setValue([])
      
  }

  // DELETING NUMBERS
  const handleDelete = ()=>{
     
  }
  return (
    <div className='keys'>
       

        <div className="row-1">
        <button className='number-btn' value={converter ? "Weight" : 'sin'} onClick={handleKeys}>{converter ? "Weight" : 'sin'}</button>
        <button className='number-btn' value={converter ? "Area" : 'cos'} onClick={handleKeys}>{converter ? "Area" : 'cos'}</button>
        <button className='number-btn' value={converter ? "Length" : 'tan'} onClick={handleKeys}>{converter ? "Length" : 'tan'}</button>
        <button className='number-btn' value={converter ? "Volume" : '√'} onClick={handleKeys}>{converter ? "Volume" : '√'}</button>
        <button className='number-btn' value={converter ? "Time" : 'π'} onClick={handleKeys}>{converter ? "Time" : 'π'}</button>

        </div>
        <div className="row-1">
        <button className='number-btn'value="(" onClick={handleKeys}>(</button>
        <button className='number-btn'value="7" onClick={handleKeys}>7</button>
        <button className='number-btn' value="4" onClick={handleKeys}>4</button>
        <button className='number-btn' value="1" onClick={handleKeys}>1</button>
        <button className='number-btn' value="0" onClick={handleKeys}>0</button>

        </div>
        <div className="row-1">
        <button className='number-btn'value=")" onClick={handleKeys}>)</button>
        <button className='number-btn'value="8" onClick={handleKeys}>8</button>
        <button className='number-btn'value="5" onClick={handleKeys}>5</button>
        <button className='number-btn'value="2" onClick={handleKeys}>2</button>
        <button className='number-btn'value="." onClick={handleKeys}>.</button>

        </div>
        <div className="row-1">
        <button className='number-btn' value="" onClick={handleClear}>AC</button>
        <button className='number-btn' value="9" onClick={handleKeys}>9</button>
        <button className='number-btn' value="6" onClick={handleKeys}>6</button>
        <button className='number-btn'value="3" onClick={handleKeys}>3</button>
        <button className='number-btn' value="" onClick={handleDelete}>DEL</button>

        </div>
        <div className="row-5">
        <button className='number-btn'value="/" onClick={handleKeys}>/</button>
        <button className='number-btn'value="x" onClick={handleKeys}>x</button>
        <button className='number-btn'value="-" onClick={handleKeys}>-</button>
        <button className='number-btn'value="+" onClick={handleKeys}>+</button>
        <button className='number-btn' value="=" onClick={handleKeys}>=</button>

        </div>

        
    </div>
  )
}

export default Keys