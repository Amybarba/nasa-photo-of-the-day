import React, { useState, useEffect } from "react";
import axios from "axios";
import NASALogo from "./images/NASAlogo.png";
import TextImage from "./components/TextImage";
import Photo from "./components/Photo";

import "./App.css";

export const App = () => {
  const [photoState, setPhotoState] = useState();
  const [photoDateState, setPhotoDateState] = useState();
  const [crState, setCRState] = useState();
  const [photoTitleState, setPhotoTitleState] = useState();
  const[expState, setExpState] = useState();
  const [hdState, setHDState] = useState();
  const hdVisState = useState(false);

  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=coIXtevnELTAPR9QK2Ujfx0ZxlisHdO3TKLhON5Y"
      )
      // Which we then set to state
      .then(res => {
        setPhotoState(res.data.url);
        setPhotoDateState(res.data.date);
        setCRState(res.data.copyright);
        setPhotoTitleState(res.data.title);
        setExpState(res.data.explanation);
        setHDState(res.data.hdurl);
      })
      // Always include error handling
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="hd-modal"
      style={{visibility: hdVisState[0] ? "visible" : "hidden"}}
      >
        <img src={hdState} alt="HD button from NASA" />
        <button className="close-button"
        onClick={() => hdVisState[1] (!hdVisState[0])}
        >Close
        </button>
        </div>
      <h1>Universe Photo of the day</h1>
      <div className="main-page">
        <img src={NASALogo} alt="NASA Logo" />
        <div>
          <button
            className="photo-button"
            onClick={() => setPhotoState(photoState)}
          >
            Bang
          </button>
          <div className="main-container">
            <Photo
            url={photoState}
              copyright={crState}
              date={photoDateState}
              />
              <div>
              <TextImage title={photoTitleState} exp={expState} hdVisState={hdVisState} />
             </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;

