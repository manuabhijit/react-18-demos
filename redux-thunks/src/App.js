import "./App.css";
import ReduxComponent from "./redux/redux";
import { Provider } from "react-redux";
import notesStore from "./redux/boilerplate/store";
import DeleteComponent from "./redux/deletionComponent";

function App() {
  return (
    <div className="app-wrapper">
      <Provider store={notesStore}>
        <ReduxComponent />
        <DeleteComponent />
      </Provider>
    </div>
  );
}

export default App;
