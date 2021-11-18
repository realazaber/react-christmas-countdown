import React from 'react';

import mainAudio1 from "../audio/mainAudio1.mp3";
import mainAudio2 from "../audio/mainAudio1.mp3";

function AudioPlayer() {

    let isPlaying = false;

    let bgAudio = null;

    const playMusic = () => {

        const randInt = Math.floor(Math.random() * 100);
        console.log(randInt);
    
        if (randInt === 69 && isPlaying === false) {
          bgAudio = new Audio(mainAudio2);
          bgAudio.play();
        }  
        else if (randInt !== 69 && isPlaying === false) {
          bgAudio = new Audio(mainAudio1);
          bgAudio.play();
        }

        isPlaying = true;    
    }

    const pauseMusic = () => {
        bgAudio.pause();
        isPlaying = false;
    }

    return (
        <div id="audioPlayer">
            <button onClick={playMusic}>
                Play music
            </button>
            <button onClick={pauseMusic}>
                Stop music
            </button>
        </div>
    )
}

export default AudioPlayer
