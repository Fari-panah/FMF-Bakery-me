import React, { useState } from "react";
import Categories from "./Categories";
import ItemInfo from "./ItemInfo";
import menu from "../menuItems";
import "./Menu.css";

const allCategories = ["All", ...new Set(menu.map((item) => item.category))];

const Menu = () => {
  const [items, setItems] = useState(menu);
  const [selectedItem, setSelectedItem] = useState(null);

  const filterItems = (category) => {
    if (category === "All") {
      setItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu</h2>
      <Categories categories={allCategories} filterItems={filterItems} />
      <div className="menu-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.img} alt={item.title} className="menu-img" />
            <h4 className="menu-item-title">{item.title}</h4>
          </div>
        ))}
      </div>
      {selectedItem && (
        <ItemInfo item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default Menu;



