import React, { useState } from 'react'

const TextBinary = () => {
    const [dec, setDec] = useState({
        binary_text:""
    })
    function convert() {
        var output = document.getElementById("ti2");
        var input = document.getElementById("ti1").value;
        output.value = "";
        for (var i = 0; i < input.length; i++) {
            output.value += input[i].charCodeAt(0).toString(2) + " ";
        }
      }
  return (
   <>
   
<div class="container calulator">
      <div class="rounding-calculator">
        <h2>Text to Binary</h2>
        <div>
          <label>Text</label>
          <input class="input" id="ti1" name='binary_text' value ={dec.name} onChange={(e)=>{setDec(e.target.value)}} type="text" />
        </div>
        <button className='calculator-button' onClick={convert}>Convert</button>

        <div>
          <textarea
          disabled
            name=""
            id="ti2"
            cols="50"
            rows="5"
            placeholder="Result"
          ></textarea>
        </div>
      </div>
    </div>



   </>
  )
}

export default TextBinary