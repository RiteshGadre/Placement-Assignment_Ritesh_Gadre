import Wrapper from "./components/Wrapper";
import "./App.css";
import { DarkModeProvider } from "./context";
function App() {
  return (
    <DarkModeProvider>
      <Wrapper />
    </DarkModeProvider>
  );
}

export default App;
