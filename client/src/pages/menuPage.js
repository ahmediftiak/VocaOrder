import React, { useState } from "react";

import menuData from "../menuitems.json";
import VoiceRecord from "../components/SpeechRecognition";

function MenuPage() {

  const [voiceQuery, setVoiceQuery] = useState("")

  return (
    <div className="App">
      <h1>Menus list</h1>
      <div className="row">
        <div className="col-sm-8">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Search Menus with keywords</span>
            </div>
            <input
              type="text"
              aria-label="taste"
              className="form-control"
              value={voiceQuery}
              onChange={event => setVoiceQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-4">
          < VoiceRecord setVoiceQuery={setVoiceQuery} />
        </div>
      </div>
      <br></br>
      {
        menuData.filter(menu => {
          if (voiceQuery === '') {
            return menu;
          } else if (menu.taste.toLowerCase().includes(voiceQuery.toLowerCase())) {
            return menu;
          }
        }).map((menu, id) => (
          <div className="menus-box" key={id}>
            <div className="menu-box">
              <h3>{menu.title}</h3>
              <img src={menu.image} alt="foodImage" />
              <h6>{menu.taste}</h6>
            </div>
          </div>
        ))
      }
      <br></br>
    </div>
  );
}

export default MenuPage;