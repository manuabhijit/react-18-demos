import "./App.css";
import ReduxComponent from "./redux/redux";
import { Provider } from "react-redux";
import notesStore from "./redux/boilerplate/store";

function App() {
  return (
    <div className="app-wrapper">
      <Provider store={notesStore}>
        <ReduxComponent />
      </Provider>
    </div>
  );
}

export default App;
