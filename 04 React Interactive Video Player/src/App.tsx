import "./App.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import Quiz from "react-quiz-component";
import { quiz } from "./data/quiz";

function App() {
  const [isMuted,setIsMuted] = useState(false);
  const [isPlaying,setIsPlaying] = useState(true);
  const [quizTime,setQuizTime] = useState(false);

  const toggleMute = () => {
    setIsMuted(() => !isMuted)
  }
  const handleVideoProgress = (state:{ playedSeconds: number }) => {
    const sec:number = state.playedSeconds
    console.log(sec)
    console.log(isPlaying)

    if (sec > 3) {
      setIsPlaying(false)
      setQuizTime(true)
    }
  
  }
  return (
    <>
      <ReactPlayer url="https://www.youtube.com/watch?v=PKm61nrqpCA" controls muted={isMuted} playing={isPlaying}  onProgress={handleVideoProgress} />
      <button onClick={toggleMute}>Mute</button>
      <button onClick={toggleMute}>Mute</button>


      {quizTime &&
      <Quiz quiz={quiz} />
      }


    </>
  );
}

export default App;
