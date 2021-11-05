import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

    // New Item State:
    const [itemName, setItemName] = useState("");
    const [itemCategory, setItemCategory] = useState("Produce");


  function handleNewItemNameChange(event) {
    setItemName(event.target.value);
  }
  function handleNewItemCatChange(event) {
    setItemCategory(event.target.value);
  }


  function handleSubmit(e){
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem)
    setItemName('');
    setItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNewItemNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleNewItemCatChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;