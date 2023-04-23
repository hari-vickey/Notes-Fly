
import React, {useState} from 'react';

function InputItem(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(event) {
    if (event.key === 'Enter' || !event.key) {
      props.onAdd(inputText);
      setInputText("");
    }
  }

  return (
    <div className="form">
      <input onKeyDown={addItem} onChange={handleChange} type="text" value={inputText} autoFocus/>
      <div className='btn btn-warning' onClick={addItem}><span>Add</span></div>
    </div>
  );
}

export default InputItem;