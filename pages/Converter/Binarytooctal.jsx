import React, { useState } from 'react'

const Binarytooctal = () => {

const [binary, setBinary] = useState('');
const [hex, setHex] = useState('');

const handleChange = (event) => {
  const binaryValue = event.target.value;
  const hexValue = parseInt(binaryValue, 2).toString(8);
  setBinary(binaryValue);
  setHex(hexValue);
}


  return (
    <>
     <div class="container calulator">
      <div class="rounding-calculator">
        <h2>Hexa To Binary</h2>
        <div>
          <label>Text</label>
          <input class="input" type="text" value={binary} onChange={handleChange} placeholder="Enter Binary Number" />
        </div>
        <button className='calculator-button' >Convert</button>

        <div>
          <h3>
            {hex}
          </h3>
       
        </div>
      </div>
    </div>
    </>
  )
}

export default Binarytooctal