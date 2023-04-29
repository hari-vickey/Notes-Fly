import { useState } from 'react';
import Item from './Item';
import InputItem from './InputItem';

var list = [];

function TodoList(props) {
  const [items, setItems] = useState([]);
  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((_, index) => {
        // returns all the element of the array
        // without the provided index element
        return index !== id;
      });
    });
  }

  function checkProps(array) {
    if (array.length === 0) { list = items }
    else { list = array }
  }

  return (
    <div className='todo-list'>
      <div className='heading'>
        <h1>Check List</h1>
      </div>
      <InputItem onAdd={addItem} />
      <div className='list'>
        {checkProps(props.items)}
        {list.map((element, index) => (
          <Item id={index} key={element.task + '_' + index}
            checked={element.checked} text={element.task}
            onChecked={deleteItem} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
