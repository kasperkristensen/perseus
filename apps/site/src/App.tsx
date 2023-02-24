import { Box, Notification, Stack, Tooltip } from "@medusa-ui/core";
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { TestButton } from "./components/test/test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
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
        <Stack direction="column">
          <Tooltip content="This is a tooltip!">
            <TestButton>Hello World!</TestButton>
          </Tooltip>
          <Box my={"2xlarge"}>Content</Box>
          <Notification
            variant="warning"
            description="Are you sure you want to exit?"
            title="You have unsaved changes"
          />
        </Stack>
      </div>
    </div>
  );
}

export default App;
