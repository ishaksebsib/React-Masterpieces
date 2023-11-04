import "./App.css";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode, changeMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <main className="core">
        <h1>useContext in React</h1>
        
          <button onClick={changeMode}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
          <p>
            `useContext` is a hook in React that allows components to access
            shared data without prop drilling.{" "}
          </p>
        <a
          href="https://react.dev/reference/react/useContext"
          className="read-the-docs"
        >
          Click here To Learn more
        </a>
      </main>
    </div>
  );
}

export default App;
