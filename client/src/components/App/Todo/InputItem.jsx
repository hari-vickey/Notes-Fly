import { useState } from 'react';
// import Axios from 'axios';

export default function InputItem(props) {
  const [item, setItem] = useState({task: '', checked: false});

  function handleChange(event) {
    const {name, value} = event.target;
    setItem(prevVal => {
      return {
        ...prevVal, [name]: value
      };
    });
  }

  function submitItem(event) {
    if (event.key === 'Enter' || !event.key) {
      props.onAdd(item);
      event.preventDefault();
      setItem({task: '', checked: false});
    }
    // if (event.key === 'Enter' || !event.key) {
    //   props.onAdd(item);
    //   Axios.post('http://localhost:8000/api/todo', {data: item})
    //   .then((res) => {
    //     console.log(res.item.message);
    //   }).catch((err) => {
    //     console.log('Error');
    //     console.log(err.message);
    //   });
    //   setItem('');
    // }
  }

  return (
    <div className='form'>
      <input onKeyDown={submitItem} onChange={handleChange} type='text' name='task' value={item.task} autoFocus
      autoComplete='off'/>
      <div className='btn' onClick={submitItem}><span>Add</span></div>
    </div>
  );
}