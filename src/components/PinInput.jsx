import React from 'react';
import { forwardRef } from 'react';
import "../App.css";

const PinInput = forwardRef(({handleChange,handleback},ref) => {
    const handlekey = (e)=> {
        if(e.keyCode === 8){
            handleback(e);
        }
        else{
            handleChange(e);
        }
    }
  return (
    <div className='pininput-box-div'>
        <input ref={ref} maxLength={1} onKeyUp={handlekey}/>
    </div>
  )
})

export default PinInput