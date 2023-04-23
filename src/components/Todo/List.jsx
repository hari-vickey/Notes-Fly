import React, { useState } from "react";
import Item from "./Item";
import InputItem from "./InputItem";

function TodoList() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        // returns all the element of the array
        // without the provided index element
        return index !== id;
      });
    });
  }

  return (
    <div className="todo-list">
      <div className="heading">
        <h1>Check List</h1>
      </div>
      <InputItem onAdd={addItem} />
      <div className="list">
        <div>
          {items.map((todoItem, index) => (
            <Item key={index} id={index} text={todoItem} onChecked={deleteItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
