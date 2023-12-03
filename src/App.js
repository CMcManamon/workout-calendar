import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import { T25GammaPure } from "./templates/T25GammaPure";

function App() {
  return (
    <div className="App">
      <Calendar template={T25GammaPure} />
    </div>
  );
}

export default App;
