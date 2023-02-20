import { ThemeProvider } from "@medusa-ui/core";
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { TestButton } from "./components/test/test";
import { myTheme } from "./my-theme.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider themes={[myTheme]}>
      <div className="App">
        <div className={myTheme.className}>
          <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <TestButton>Hey</TestButton>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
