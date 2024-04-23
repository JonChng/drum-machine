import React, { useState, useEffect } from 'react';

import './App.css';


function App() {

  const [isToggled, setIsToggled] = useState(false);
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
  
  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  }

  const playAudio = (id) => {

    if (isToggled === false) return;
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
    console.log(isToggled)
    if (isToggled === false) return;
    const audio = document.getElementById(e.key.toUpperCase());
    console.log(audio)
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

  useEffect(() => { 
    if (isToggled) {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.removeEventListener("keydown", handleKeyPress);
    } return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isToggled]);
  
  
  return (
    <div className="App flex justify-center items-center h-screen bg-slate-700" id="drum-machine">
      <div className="border border-white border-2 p-10 w-2/5 h-auto grid grid-cols-2 bg-slate-500 text-white">
        <div className=" p-4 grid grid-cols-3 gap-4 justify-items-center">
          {buttons}
        </div>
      <div className="h-10 w-3/5 ml-auto mr-auto">
        <div className="w-full m-5">
          <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" onChange={toggleSwitch} checked={isToggled}></input>
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> 
          <span class="ms-3 text-sm font-medium text-white dark:text-gray-300">Off/On</span>
          </label>  
        </div>

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
