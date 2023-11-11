import "./App.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import { quiz } from "./data/quiz";
import Quiz from "./components/Quiz";

function App() {
  const [controller,setControllers] = useState(true);
  const [isPlaying,setIsPlaying] = useState(true);
  const [quizTime,setQuizTime] = useState(false);


  const handleVideoProgress = (state:{ playedSeconds: number }) => {
    const sec:number = state.playedSeconds

    if (sec > 3 && sec < 3.7) {
      handleQuizTime()
    }
  
  }

  const handleContinue = () => {
    setQuizTime(false)
    setIsPlaying(true)
    setControllers(true)
  }

  const handleQuizTime = () => {
    setControllers(false)
    setIsPlaying(false)
    setQuizTime(true)
  }
  return (
    <>
      <ReactPlayer url="https://player.vimeo.com/video/405386433?title=0&portrait=0&byline=0&autoplay=1&muted=true" controls={controller} playing={isPlaying}  onProgress={handleVideoProgress} />
      
      <h1 className=" bg-slate-500">Home page</h1>

      {quizTime && 
        <Quiz quiz={quiz} handleContinue={handleContinue} handleVideoProgress={handleVideoProgress}/>
      }
  
    </>
  );
}

export default App;
