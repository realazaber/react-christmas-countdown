import React from "react";
import { Fragment } from "react";

import Countdown from "./components/Countdown";
import AudioPlayer from "./components/AudioPlayer";
import "./css/main.css";




function App() {






  return (
    <Fragment>
      <h1>
        Time until next Christmas
      </h1>
      <Countdown />
      <AudioPlayer />
    </Fragment>
  );
}

export default App;
