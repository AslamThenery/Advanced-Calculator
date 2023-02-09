import React from 'react'
import "./keys.css"

function Keys() {
  return (
    <div className='keys'>
        {/* <button className='number-btn'>1</button>
        <button className='number-btn'>2</button>
        <button className='number-btn'>3</button>
        <button className='number-btn'>4</button>
        <button className='number-btn'>5</button>
        <button className='number-btn'>6</button>
        <button className='number-btn'>7</button>
        <button className='number-btn'>8</button>
        <button className='number-btn'>9</button>
        <button className='number-btn'>0</button>
        <button className='number-btn'>.</button>
        <button className='number-btn'>AC</button>
        <button className='number-btn'>+</button>
        <button className='number-btn'>-</button>
        <button className='number-btn'>X</button>
        <button className='number-btn'>/</button>
        <button className='number-btn'>pI</button>
        <button className='number-btn'>ROOT</button>
        <button className='number-btn'>DEL</button>
        <button className='number-btn'>=</button> */}

        <div className="row-1">
        <button className='number-btn'>sin</button>
        <button className='number-btn'>cos</button>
        <button className='number-btn'>tan</button>
        <button className='number-btn'>root</button>
        <button className='number-btn'>pi</button>

        </div>
        <div className="row-1">
        <button className='number-btn'>(</button>
        <button className='number-btn'>7</button>
        <button className='number-btn'>4</button>
        <button className='number-btn'>1</button>
        <button className='number-btn'>0</button>

        </div>
        <div className="row-1">
        <button className='number-btn'>)</button>
        <button className='number-btn'>8</button>
        <button className='number-btn'>5</button>
        <button className='number-btn'>2</button>
        <button className='number-btn'>.</button>

        </div>
        <div className="row-1">
        <button className='number-btn'>AC</button>
        <button className='number-btn'>9</button>
        <button className='number-btn'>6</button>
        <button className='number-btn'>3</button>
        <button className='number-btn'>DEL</button>

        </div>
        <div className="row-5">
        <button className='number-btn'>/</button>
        <button className='number-btn'>x</button>
        <button className='number-btn'>-</button>
        <button className='number-btn'>+</button>
        <button className='number-btn'>=</button>

        </div>

        
    </div>
  )
}

export default Keys