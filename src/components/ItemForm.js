import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ itemName, itemCategory, onNameChange, onCatChange, onItemFormSubmit }) {



  return (
    <form className="NewItem" onSubmit={ (e) => {
      const newItem = {
        id: uuid(),
        name: itemName,
        category: itemCategory,
      };
      onItemFormSubmit(e, newItem)
    }}
    >
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={onNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={onCatChange}>
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
