import React from "react";
import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";


import menuData from "../menuitems.json";
import micImage from "../images/icons8-microphone-50.png"
// import VoiceRecord from "../components/SpeechRecognition";

function MenuPage() {

  const [query, setQuery] = useState("")
  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition
  // } = useSpeechRecognition();

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }


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
              onChange={event => setQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <p>click on the voice icon to get your food menu</p>
          {/* <p>Ritu Speak here... {listening ? "on" : "off"}</p>
          <button onClick={SpeechRecognition.startListening}> */}
            <img src={micImage} alt="micImage" />
          {/* </button> */}
          {/* <button onClick={resetTranscript}>Reset</button> */}
        </div>
      </div>
      <br></br>
      { // eslint-disable-next-line
        menuData.filter(menu => {
          if (query === '') {
            return menu;
          } else if (menu.taste.toLowerCase().includes(query.toLowerCase())) {
            return menu;
          }
        }).map((menu, id) => (
          <div className="menus-box">
            <div className="menu-box" key={id}>
              <h3>{menu.title}</h3>
              <img src={menu.image} alt="foodImage" />
              <h6>{menu.taste}</h6>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default MenuPage;