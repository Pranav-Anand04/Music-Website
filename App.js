import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "O Antava Mawa",
      artist: " Indravathi Chauhan",
      img_src: "./images/pushpa.jpg",
      src: "./music/oantavamawa.mp3",
    },
    {
      title: "On My Own",
      artist: " Darci",
      img_src: "./images/onmyown.jpg",
      src: "./music/onmyown.mp3",
    },
    {
      title: "Whethan - LOCK IT UP (feat. Yeat, midwxst & Matt Ox)",
      artist: " Whethan",
      img_src: "./images/lockitup.jpg",
      src: "./music/lockitup.mp3",
    },
    {
      title: "CAN'T SAY",
      artist: " Travis Scott",
      img_src: "./images/cantsay.jpg",
      src: "./music/cantsay.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setnexttSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setnexttSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
