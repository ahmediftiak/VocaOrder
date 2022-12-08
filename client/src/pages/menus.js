import React from "react";
import menuData from "../menuitems.json";

function Menus() {

  return (
    <div className="App">
      <h1>Menus list</h1>
      {menuData.map(menu => (
        <div key={menu.id}>
          {menu.title}
          {/* {menu.image} */}
        </div>
      ))}
    </div>
  );
}

export default Menus;