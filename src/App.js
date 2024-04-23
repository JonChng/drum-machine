import React, { useState } from 'react';

import './App.css';


function App() {

  const [itemName, setItemName] = useState('');
  const [volume, setVolume] = useState(0.5);

  const arr = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      name: 'Heater-1'
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      name: 'Heater-2'
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      name: 'Heater-3'
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      name: 'Heater-4'
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      name: 'Clap'
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      name:"Open-HH"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      name: "Kick n' Hat"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      name: "Kick"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      name: "Closed-HH"
    }
  ];

  const newVolume = (e) => {
    const volume = e.target.value;
    setVolume(volume);
  }

  const playAudio = (id) => {
    const audio = document.getElementById(id);

    audio.volume = volume;
    audio.play();
    arr.forEach((item) => {
      if (item.text === id) {
        setItemName(item.name);
      }
    });
  };

  const handleKeyPress = (e) => {
    const audio = document.getElementById(e.key.toUpperCase());
    if (audio) {
      playAudio(e.key.toUpperCase());
      };
      
    }

  

  const buttons = arr.map((item, index) => (
    <div key={index} className="grid-item">
      <button className="drum-pad border border-white bg-indigo-800 w-10 h-10" id={item.keyCode} onClick={() => playAudio(item.text)}>
        {item.text}
        <audio className="clip" id={item.text} src={item.src}></audio>
      </button>
    </div>
  ));

  document.addEventListener("keydown", handleKeyPress);
  
  return (
    <div className="App flex justify-center items-center h-screen bg-slate-700" id="drum-machine">
      <div className="border border-white border-2 p-10 w-2/5 h-auto grid grid-cols-2 bg-slate-500 text-white">
        <div className=" p-4 grid grid-cols-3 gap-4 justify-items-center">
          {buttons}
        </div>
      <div className="h-10 w-3/5 m-auto">

        <div className="h-10 w-full border border-white border-3 m-auto">
          <h1 id="display" className="mt-2 align-middle text-center text-white">{itemName}</h1>
        </div>
        <div className="mt-5">
          <input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" type="range" min="0" max="1" step="0.01" value={volume} onChange={newVolume}></input>
          <p>Volume: {volume} </p>
        </div>
      </div>
      </div>
       
     
      
    </div>
  );}





export default App;
