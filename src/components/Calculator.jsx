import React, { useState } from 'react'
import './calculator.css'

const Calculator = () => {

    const [input, setInput] = useState('')

  return (
    <div className='container'>
      <div className='calc'>
        <div className='inp'>
          <input type='text' readOnly  value={input}/>
        </div>

        <div className="btns">
          <input type="button" value="C" id="clear" onClick={e => {setInput('')}}/>
          <input type="button" value="D" id="delete" onClick={e => {setInput(input.slice(0,-1))}}/>
          <input type="button" id='spl' value="%" onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" id='spl' value="/" onClick={e => {setInput(input + e.target.value)}}/>

          <input type="button" value="7" onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" value="8" onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" value="9" onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" id='spl' value="+" onClick={e => {setInput(input + e.target.value)}}/>

          <input type="button" value="4" onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" value="5" onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" value="6" onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" id='spl' value="*" onClick={e => {setInput(input + e.target.value)}}/>

          <input type="button" value="1" onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" value="2" onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" value="3" onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" id='spl' value="-" onClick={e => {setInput(input + e.target.value)}}/>

          <input type="button" value="0" className="zero" onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" value="." onClick={e => {setInput(input + e.target.value)}}/>
          <input type="button" value="=" id="equal" onClick={e => {setInput(eval(input))}}/>
        </div>
      </div>
    </div>
  )
}

export default Calculator
