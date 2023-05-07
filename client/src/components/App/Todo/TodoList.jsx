import { useState, useEffect } from 'react';
import Axios from 'axios';
import Item from './Item';
import InputItem from './InputItem';

export default function TodoList(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function getItems() {
      Axios.post(process.env.REACT_APP_TODO_URL + '/allItems',
      { mail: props.id }).then(res => setItems(res.data));
    };
    getItems();
  }, [items, props.id]);

  function addItem(inputItem) {
    Axios.post(process.env.REACT_APP_TODO_URL + '/addItem',
    { mail: props.id, item: inputItem })
  }

  function deleteItem(id) {
    Axios.post(process.env.REACT_APP_TODO_URL + '/deleteItem',
    { mail: props.id, item: id })
  }

  return (
    <div className='todo-list'>
      <div className='heading'>
        <h1>Check List</h1>
      </div>
      <InputItem onAdd={addItem} />
      <div className='list'>
        {items.map((element) => (
          <Item id={element._id} key={element._id}
            text={element.item} onChecked={deleteItem} />
        ))}
      </div>
    </div>
  );
}
