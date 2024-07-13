import React, {useState} from 'react'

export default function Textarea() {
    const [text, setText] = useState('');

    const handleOnClick = (event) => {
        setText(text.toUpperCase());
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

  return (
<>
  <div className='container'>
    <div className="mb-3"><br/>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="12" value = {text} placeholder='Enter text here' onChange={handleOnChange}></textarea>   
    </div>
    <button className='btn btn-primary' onClick={handleOnClick}>Upper Case</button> 
  </div>
  <div className='container'>
    <h2>Text summary</h2>
    <p>{ text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    {text}
  </div>
</>
  )
}
