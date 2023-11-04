import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>useContext in React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            { count ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <p>
          `useContext` is a hook in React that allows components to access
          shared data without prop drilling.{" "}
        </p>
      </div>
      <a
        href="https://react.dev/reference/react/useContext"
        className="read-the-docs"
      >
        Click here To Learn more
      </a>
    </>
  );
}

export default App;
