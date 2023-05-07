import { useState } from 'react';

export default function InputItem(props) {
  const [todo, setTodo] = useState({item: '', checked: false});

  function handleChange(event) {
    const {name, value} = event.target;
    setTodo(prevVal => {
      return {
        ...prevVal, [name]: value
      };
    });
  }

  function submitItem(event) {
    if (event.key === 'Enter' || !event.key) {
      props.onAdd(todo);
      setTodo({item: '', checked: false});
    }
  }

  return (
    <div className='form'>
      <input onKeyDown={submitItem} onChange={handleChange} type='text' name='item' value={todo.item} autoFocus
      autoComplete='off'/>
      <div className='btn' onClick={submitItem}><span>Add</span></div>
    </div>
  );
}