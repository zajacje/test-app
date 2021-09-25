import React, { useState } from 'react'


export default () => {
  const [items, setItems] = useState(['Apples', 'Strawberries'])
  const [newItem, setNewItem] = useState('')
  const changeNewItem = (e) => setNewItem(e.target.value)
  const addItem = () => {
    setItems((list) => [...list, newItem])
    setNewItem('')
  }
  return (
    <main>
      <h1>Shopping List</h1>
      <div>
        <input
          placeholder="New item"
          onChange={changeNewItem}
          value={newItem}
        />
        <button onClick={addItem}>Add item</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <style jsx>{`
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      padding: 1em 0;
      border-top: 1px solid #eee;
    }
  `}</style>
    </main>
  )
}