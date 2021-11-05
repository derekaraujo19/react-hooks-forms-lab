import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  // Category Filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  // Search State:
  const [searchFood, setSearchFood] = useState("");

  function handleOnSearchChange(event) {
    setSearchFood(event.target.value);
  }






function onItemFormSubmit(newItem) {
  // console.log(newItem)
  const newItemsToDisplay = [...items, newItem];
  setItems(newItemsToDisplay)

}



// Display to Dom
  const itemsToDisplay = items.filter((item) => {
    if (searchFood === "") {

      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    } else {
      return item.name.toLowerCase().includes(searchFood.toLowerCase());
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} setItems={setItems}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchFood} onSearchChange={handleOnSearchChange} selectedCategory={selectedCategory}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}

      </ul>
    </div>
  );
}

export default ShoppingList;