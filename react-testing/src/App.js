import DisplayComponent from "./components/01_display";
import SnapshotComponent from "./components/02_screenshot";
import ClickEvent from "./components/03_clickEvents";

function App() {
  return (
    <div className="App">
      <DisplayComponent />
      <SnapshotComponent />
      <ClickEvent />
    </div>
  );
}

export default App;
