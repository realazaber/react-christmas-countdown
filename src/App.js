import React from "react";
import { Fragment } from "react";

import Countdown from "./Countdown";
import "./css/main.css";


function App() {

  if (Math.floor(Math.random() * 100) === 69) {
    const bgAudio = new Audio('https://www.youtube.com/watch?v=239SxZ6ZNTo');
    bgAudio.play();
  }  
  else {
    const bgAudio = new Audio('https://www.youtube.com/watch?v=aAkMkVFwAoo');
    bgAudio.play();
  }


  return (
    <Fragment>
      <h1>
        Time until next Christmas
      </h1>
      <Countdown />
    </Fragment>
  );
}

export default App;
