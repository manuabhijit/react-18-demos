import './App.css';
import UseStateComponent from './components/01_useStateDemo';
import UseEffectComponent from './components/02_useEffectDemo';
import UseContextComponent from './components/03_useContextDemo';
import UseReducerComponent from './components/04_useReducerDemo';
import UseMemoComponent from './components/05_useMemoDemo';

function App() {
  return (
    <div className="main-container">
      <h4>Use State</h4>
      <UseStateComponent />

      <h4>Use Effect</h4>
      <UseEffectComponent />

      <h4>Use Context</h4>
      <UseContextComponent />

      <h4>Use Reducer</h4>
      <UseReducerComponent />

      <h4>UseReducerComponent</h4>
      <UseMemoComponent />
    </div>
  );
}

export default App;
