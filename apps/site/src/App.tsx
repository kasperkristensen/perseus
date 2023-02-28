import { Stack } from "@medusa-ui/core";
import { Sidebar } from "./components/sidebar";
import { app } from "./index.css";

function App() {
  return (
    <Stack className={app}>
      <Sidebar />
      <Stack></Stack>
    </Stack>
  );
}

export default App;
