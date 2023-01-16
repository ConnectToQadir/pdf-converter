import React,{useState,useEffect} from 'react'

const Hexatobinary = () => {
    const [hex, setHex] = useState('');
    const [result, setResult] = useState('');
    

    console.log(hex);
     

    const hexToBinaryconvert=(e)=>{
       e.preventDefault();
    // function hexToBinary() {
        var hexRegex = /[0-9A-Fa-f]/g;
        if(hex.match(hexRegex) && hex.length>0){
            // return parseInt(hex, 16).toString(2);
            let value= parseInt(hex, 16).toString(2);
            setResult(value);
        }else{
            // return 'Invalid Hexadecimal';
            let value= 'Invalid Hexadecimal';
            setResult(value);
        }
    // }
   
   }
    
  return (
    <>
    
    <div class="container calulator">
      <div class="rounding-calculator">
        <h2>Hexa To Binary</h2>
        <div>
          <label>Text</label>
          <input class="input" id="ti1" name='binary_text' onChange={(e)=>{setHex(e.target.value)}} type="text" />
        </div>
        <button className='calculator-button' onClick={hexToBinaryconvert}>Convert</button>

        <div>
        {result}
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Hexatobinary